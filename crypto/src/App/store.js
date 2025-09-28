import { configureStore } from "@reduxjs/toolkit";
import { coinGeckoApi } from "../Services/coinGeckoApi";
import { cryptoNewsApi } from "../Services/cryptoNewsApi";
import { exchangeApi } from "../Services/exchangeApi";

export const store = configureStore({
    reducer: {
        [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [exchangeApi.reducerPath]: exchangeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(coinGeckoApi.middleware)
            .concat(cryptoNewsApi.middleware)
            .concat(exchangeApi.middleware),
});
