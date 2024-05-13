import customFetchBase from "@/utils/CustomFetchBase";
import { SETTINGS_API } from "@/utils/URL";
import { createApi } from "@reduxjs/toolkit/query/react";

export const settingService = createApi({
  reducerPath: "settingService",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    eventCreationSetting: builder.query({
      query: (params) => ({
        url: SETTINGS_API.EVENT_CREATION_SETTINGS,
        method: "GET",
        params,
      }),
    }),
    eventSetting: builder.mutation({
      query: (boby) => ({
        url: SETTINGS_API.EVENT_SETTINGS,
        method: "POST",
        boby,
      }),
    }),
  }),
});

export const { useLazyEventCreationSettingQuery, useEventSettingMutation } =
  settingService;
