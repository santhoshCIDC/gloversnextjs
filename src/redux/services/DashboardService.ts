import customFetchBase from "@/utils/CustomFetchBase";
import { DASHBOARD_API } from "@/utils/URL";
import { createApi } from "@reduxjs/toolkit/query/react";

export const dashService = createApi({
  reducerPath: "dashService",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    teamMatrics: builder.query({
      query: (params) => ({
        url: DASHBOARD_API.TEAM_MATRICS,
        method: "GET",
        params,
      }),
    }),
    roleMatrics: builder.query({
      query: (params) => ({
        url: DASHBOARD_API.ROLE_MATRICS,
        method: "GET",
        params,
      }),
    }),
    userMatrics: builder.query({
      query: (params) => ({
        url: DASHBOARD_API.USER_MATRICS,
        method: "GET",
        params,
      }),
    }),
    eventTabs: builder.query({
      query: (params) => ({
        url: DASHBOARD_API.EVENTS_TABS,
        method: "GET",
        params,
      }),
    }),
    eventMatrics: builder.query({
      query: (params) => ({
        url: DASHBOARD_API.EVENT_MATRICS,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  useLazyRoleMatricsQuery,
  useLazyTeamMatricsQuery,
  useLazyUserMatricsQuery,
  useLazyEventTabsQuery,
  useLazyEventMatricsQuery,
} = dashService;
