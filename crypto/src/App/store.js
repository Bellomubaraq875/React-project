import { configureStore } from "@reduxjs/toolkit";
import { coinGeckoApi } from "../Services/coinGeckoApi";
import { cryptoNewsApi } from "../Services/cryptoNewsApi";

export default configureStore({
    reducer: {
        [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            coinGeckoApi.middleware,
            cryptoNewsApi.middleware
        ),
});
