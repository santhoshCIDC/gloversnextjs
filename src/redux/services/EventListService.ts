import customFetchBase from "@/utils/CustomFetchBase";
import { EVENT_LIST_API } from "@/utils/URL";
import { createApi } from "@reduxjs/toolkit/query/react";

export const eventService = createApi({
  reducerPath: "eventService",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    eventList: builder.query({
      query: (params) => ({
        url: EVENT_LIST_API.EVENT_LIST,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useLazyEventListQuery } = eventService;
