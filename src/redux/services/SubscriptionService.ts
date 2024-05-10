import customFetchBase from "@/utils/CustomFetchBase";
import { SUBSCRIPTION_API } from "@/utils/URL";
import { createApi } from "@reduxjs/toolkit/query/react";

export const subscriptionService = createApi({
  reducerPath: "subscriptionService",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    subscriptionPlan: builder.query({
      query: (params) => ({
        url: SUBSCRIPTION_API.SUBSCRIPTION_PLAN,
        method: "GET",
        params,
      }),
    }),
    promoCodeList: builder.query({
      query: (params) => ({
        url: SUBSCRIPTION_API.PROMO_CODE_LIST,
        method: "GET",
        params,
      }),
    }),
    createPromoCode: builder.mutation({
      query: (body) => ({
        url: SUBSCRIPTION_API.CREATE_PROMO_CODE,
        method: "POST",
        body,
      }),
    }),
    deletePromoCode: builder.mutation({
      query: (body) => ({
        url: SUBSCRIPTION_API.DELETE_PROMO_CODE,
        method: "POST",
        body,
      }),
    }),
    transactionList: builder.query({
      query: (params) => ({
        url: SUBSCRIPTION_API.TRANSACTION_LIST,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  useLazySubscriptionPlanQuery,
  useLazyPromoCodeListQuery,
  useCreatePromoCodeMutation,
  useDeletePromoCodeMutation,
  useLazyTransactionListQuery,
} = subscriptionService;
