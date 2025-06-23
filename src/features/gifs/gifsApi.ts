import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GetGifResponse } from "./gifs.type";

const API_KEY = import.meta.env.VITE_API_KEY;

export const gifsApi = createApi({
  reducerPath: "gifsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.giphy.com/v1/gifs/",
  }),
  endpoints: (builder) => ({
    getTrending: builder.query<GetGifResponse, number>({
      query: (offset = 0) =>
        `trending?api_key=${API_KEY}&limit=24&offset=${offset}`,
    }),
    searchGifs: builder.query<GetGifResponse, { q: string; offset: number }>({
      query: ({ q, offset }) =>
        `search?api_key=${API_KEY}&q=${encodeURIComponent(
          q
        )}&limit=24&offset=${offset}`,
    }),
  }),
});

export const { useGetTrendingQuery, useLazySearchGifsQuery } = gifsApi;
