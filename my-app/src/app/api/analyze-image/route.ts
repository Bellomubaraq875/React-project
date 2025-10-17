import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY in environment variables");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request: Request) {
  try {
    const { image } = await request.json();

    // Ensure image string is valid
    const base64Data = image.includes(",") ? image.split(",")[1] : image;
    const mimeType = image.includes("image/png")
      ? "image/png"
      : "image/jpeg"; // fallback to jpeg if unknown

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `Analyze this emergency situation image and respond in this exact format:
TITLE: <clear brief title>
TYPE: <Theft, Fire Outbreak, Medical Emergency, Natural Disaster, Violence, Other>
DESCRIPTION: <clear concise description>`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64Data,
          mimeType,
        },
      },
    ]);

    const text = (await result.response.text()).trim();

    // More resilient parsing
    const titleMatch = text.match(/TITLE:\s*([^\n]+)/i);
    const typeMatch = text.match(/TYPE:\s*([^\n]+)/i);
    const descMatch = text.match(/DESCRIPTION:\s*([\s\S]+)/i);

    return NextResponse.json({
      title: titleMatch?.[1]?.trim() || "",
      reportType: typeMatch?.[1]?.trim() || "",
      description: descMatch?.[1]?.trim() || "",
      rawResponse: text, // keep raw for debugging
    });
  } catch (error: any) {
    console.error("Image analysis error:", error.message, error.stack);
    return NextResponse.json(
      { error: "Failed to analyze image" },
      { status: 500 }
    );
  }
}
