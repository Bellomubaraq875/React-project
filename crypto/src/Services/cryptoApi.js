import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            async queryFn(count = 50, _queryApi, _extraOptions, fetchWithBQ) {
                const perPage = 250; // CoinGecko max
                const pagesNeeded = Math.ceil(count / perPage);
                let allCoins = [];

                for (let page = 1; page <= pagesNeeded; page++) {
                    const response = await fetchWithBQ(
                        `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`
                    );
                    if (response.error) return { error: response.error };
                    allCoins = [...allCoins, ...response.data];
                }

                return { data: allCoins.slice(0, count) }; // trim to requested count
            },
        }),
    }),
});

export const { useGetCryptosQuery } = cryptoApi;
