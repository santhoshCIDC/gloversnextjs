import customFetchBase from "@/utils/CustomFetchBase";
import { SEASON_API } from "@/utils/URL";
import { createApi } from "@reduxjs/toolkit/query/react";

export const seasonService = createApi({
  reducerPath: "seasonService",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    seasonList: builder.query({
      query: (params) => ({
        url: SEASON_API.SEASON_LIST,
        method: "GET",
        params,
      }),
    }),
    seasonCreate: builder.mutation({
      query: (body) => ({
        url: SEASON_API.SEASON_CREATE,
        method: "POST",
        body,
      }),
    }),
    seasonDelete: builder.mutation({
      query: (body) => ({
        url: SEASON_API.DELETE_SEASON,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useLazySeasonListQuery,
  useSeasonCreateMutation,
  useSeasonDeleteMutation,
} = seasonService;
