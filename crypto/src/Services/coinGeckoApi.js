// src/Services/coinGeckoApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.coingecko.com/api/v3";

export const coinGeckoApi = createApi({
    reducerPath: "coinGeckoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count = 10) =>
                `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${count}&page=1&sparkline=false`,
        }),

        getCryptoDetails: builder.query({
            query: (coinId) => `/coins/${coinId}`,
        }),

        // ✅ New history endpoint for LineChart
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod = "7" }) =>
                `/coins/${coinId}/market_chart?vs_currency=usd&days=${timeperiod}&interval=daily`,
        }),

        getExchanges: builder.query({
            query: () => `/exchanges?per_page=50&page=1`,
        }),
    }),
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery,
} = coinGeckoApi;
