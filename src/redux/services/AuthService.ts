import customFetchBase from "@/utils/CustomFetchBase";
import { AUTH_API } from "@/utils/URL";
import { createApi } from "@reduxjs/toolkit/query/react";

export const authService = createApi({
  reducerPath: "authService",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: AUTH_API.LOGIN,
        method: "POST",
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: AUTH_API.FORGOT_PASSWORD,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useForgotPasswordMutation } = authService;
