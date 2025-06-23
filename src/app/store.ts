import { configureStore } from "@reduxjs/toolkit";
import { gifsApi } from "../features/gifs/gifsApi";

export const store = configureStore({
  reducer: {
    [gifsApi.reducerPath]: gifsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gifsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
