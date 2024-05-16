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
    updateCoachStatus: builder.mutation({
      query: (body) => ({
        url: USER_LIST_API.UPDATE_COACH_STATUS,
        method: "POST",
        body,
      }),
    }),
    updateStaffStatus: builder.mutation({
      query: (body) => ({
        url: USER_LIST_API.UPDATE_STAFF_STATUS,
        method: "POST",
        body,
      }),
    }),
    updatePlayerStatus: builder.mutation({
      query: (body) => ({
        url: USER_LIST_API.UPDATE_PLAYER_STATUS,
        method: "POST",
        body,
      }),
    }),
    updateFanStatus: builder.mutation({
      query: (body) => ({
        url: USER_LIST_API.UPDATE_FAN_STATUS,
        method: "POST",
        body,
      }),
    }),
    teamResponsibilitty: builder.mutation({
      query: (body) => ({
        url: USER_LIST_API.TEAM_RESPONSIBILITY_LIST,
        method: "POST",
        body,
      }),
    }),
    staffResponsibilitty: builder.mutation({
      query: (body) => ({
        url: USER_LIST_API.STAFF_RESPONSIBILITY_LIST,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLazyCoachListQuery,
  useLazyStaffListQuery,
  useLazyPlayerListQuery,
  useLazyFanListQuery,
  useUpdateCoachStatusMutation,
  useUpdateStaffStatusMutation,
  useUpdatePlayerStatusMutation,
  useUpdateFanStatusMutation,
  useTeamResponsibilittyMutation,
  useStaffResponsibilittyMutation,
} = userService;
