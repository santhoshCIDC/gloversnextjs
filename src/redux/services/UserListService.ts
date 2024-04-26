import customFetchBase from "@/utils/CustomFetchBase";
import { USER_LIST_API } from "@/utils/URL";
import { createApi } from "@reduxjs/toolkit/query/react";

export const userService = createApi({
  reducerPath: "userService",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    coachList: builder.query({
      query: (params) => ({
        url: USER_LIST_API.COACH_LIST,
        method: "GET",
        params,
      }),
    }),
    staffList: builder.query({
      query: (params) => ({
        url: USER_LIST_API.STAFF_LIST,
        method: "GET",
        params,
      }),
    }),
    playerList: builder.query({
      query: (params) => ({
        url: USER_LIST_API.PLAYER_LIST,
        method: "GET",
        params,
      }),
    }),
    fanList: builder.query({
      query: (params) => ({
        url: USER_LIST_API.FAN_LIST,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  useLazyCoachListQuery,
  useLazyStaffListQuery,
  useLazyPlayerListQuery,
  useLazyFanListQuery,
} = userService;
