import customFetchBase from "@/utils/CustomFetchBase";
import { TEAM_LIST_API } from "@/utils/URL";
import { createApi } from "@reduxjs/toolkit/query/react";

export const teamService = createApi({
  reducerPath: "teamService",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    teamList: builder.query({
      query: (params) => ({
        url: TEAM_LIST_API.TEAM_LIST,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useLazyTeamListQuery } = teamService;
