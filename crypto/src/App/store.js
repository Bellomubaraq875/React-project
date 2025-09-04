import { configureStore } from "@reduxjs/toolkit";

import { CryptoApi } from "../Services/CryptoAPI";

export default configureStore({
    reducer: {
        [CryptoApi.reducerPath]: CryptoApi.reducer,
    },
});