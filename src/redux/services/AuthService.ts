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
    refreshToken: builder.mutation({
      query: (body) => ({
        url: AUTH_API.REFRESH_TOKEN,
        method: "POST",
        body,
      }),
    }),
    editProfile: builder.mutation({
      query: (body) => ({
        url: AUTH_API.EDIT_PROFILE,
        method: "POST",
        body,
      }),
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: AUTH_API.CHANGE_PASSWORD,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useRefreshTokenMutation,
  useEditProfileMutation,
  useChangePasswordMutation,
} = authService;
