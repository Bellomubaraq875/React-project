import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useTheme } from "@mui/material";
import { tokens } from "../themes";
import { mockGeographyData } from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeature"

const D3GeographyChart = ({ isDashboard = false }) => {
  const svgRef = useRef();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const width = isDashboard ? 400 : 800;
    const height = isDashboard ? 300 : 500;

    const projection = d3
      .geoNaturalEarth1()
      .scale(isDashboard ? 100 : 150)
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    // Clear previous chart
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Build data map
    const dataMap = new Map();
    mockGeographyData.forEach((d) => {
      dataMap.set(d.id, d.value);
    });

    // Color scale
    const colorScale = d3
      .scaleSequential()
      .domain([0, 1000000])
      .interpolator(d3.interpolateBlues);

    // Draw the map
    svg
      .selectAll("path")
      .data(geoFeatures.features)
      .join("path")
      .attr("d", pathGenerator)
      .attr("fill", (d) => {
        const val = dataMap.get(d.id);
        return val ? colorScale(val) : "#666666";
      })
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 1.5)
      .append("title")
      .text((d) => `${d.properties.name}: ${dataMap.get(d.id) || "N/A"}`);

    // Optional Legend
    if (!isDashboard) {
      const legendWidth = 300;
      const legendHeight = 10;
      const legendSvg = svg
        .append("g")
        .attr("transform", `translate(20,${height - 40})`);

      const legendScale = d3
        .scaleLinear()
        .domain([0, 1000000])
        .range([0, legendWidth]);

      const legendAxis = d3
        .axisBottom(legendScale)
        .ticks(5)
        .tickFormat(d3.format(".2s"));

      const gradientId = "legend-gradient";
      const defs = svg.append("defs");
      const gradient = defs
        .append("linearGradient")
        .attr("id", gradientId)
        .attr("x1", "0%")
        .attr("x2", "100%");

      gradient
        .selectAll("stop")
        .data(
          d3.range(0, 1.01, 0.01).map((t) => ({
            offset: `${t * 100}%`,
            color: colorScale(t * 1000000),
          }))
        )
        .join("stop")
        .attr("offset", (d) => d.offset)
        .attr("stop-color", (d) => d.color);

      legendSvg
        .append("rect")
        .attr("width", legendWidth)
        .attr("height", legendHeight)
        .style("fill", `url(#${gradientId})`);

      legendSvg
        .append("g")
        .attr("transform", `translate(0, ${legendHeight})`)
        .call(legendAxis)
        .selectAll("text")
        .style("fill", colors.gray[100]);
    }
  }, [theme.palette.mode, isDashboard]);

  return <svg ref={svgRef} />;
};

export default D3GeographyChart;