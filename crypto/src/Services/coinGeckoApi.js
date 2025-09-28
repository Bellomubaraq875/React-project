// src/services/coinGeckoApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinGeckoApi = createApi({
    reducerPath: "coinGeckoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
    endpoints: (builder) => ({
        // ✅ Get coins list (with market data)
        getCryptos: builder.query({
            query: (limit = 100) =>
                `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`,
        }),

        // ✅ Get coin details
        getCryptoDetails: builder.query({
            query: (coinId) => `/coins/${coinId}`,
        }),

        // ✅ Get coin market chart (history)
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) =>
                `/coins/${coinId}/market_chart?vs_currency=usd&days=${timeperiod}`,
        }),

        // ✅ Get exchanges list
        getExchanges: builder.query({
            query: (limit = 50) => `/exchanges?per_page=${limit}&page=1`,
        }),
    }),
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery,
} = coinGeckoApi;
