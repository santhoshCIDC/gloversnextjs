import { Mutex } from "async-mutex";

import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "@/redux/Store";


const baseUrl = process.env.NEXT_PUBLIC_URl;

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token: any | null = (getState() as RootState).authState?.tokenDetails?.access_token;
  
    console.log("getState--",token);
    if (token) {
      // const idToken =
      //   typeof token === "string"
      //     ? JSON.parse(token).idToken.jwtToken
      //     : token.idToken.jwtToken;
     
      headers.set("Authorization", token);
    }
    return headers;
  },
});
type CustomFetchBaseType = BaseQueryFn<any, unknown, unknown, {}, {}>;

const customFetchBase: CustomFetchBaseType = async (
  args: any,
  api: any,
  extraOptions: any
) => {
  return new Promise(async (resolve, reject) => {
    await mutex.waitForUnlock();

    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();
        try {
          //  add functions for the refreshtoken
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
        resolve(result);
      }
    } else {
      resolve(result);
    }
  });
};

export default customFetchBase;
