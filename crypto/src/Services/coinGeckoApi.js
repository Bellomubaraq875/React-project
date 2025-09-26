import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.coingecko.com/api/v3";

export const coinGeckoApi = createApi({
    reducerPath: "coinGeckoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count = 50) =>
                `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${count}&page=1&sparkline=false`,
        }),
    }),
});

export const { useGetCryptosQuery } = coinGeckoApi;
