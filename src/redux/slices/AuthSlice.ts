import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: localStorage?.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
    : null,

  tokenDetails: localStorage.getItem("tokenDetails")
    ? JSON.parse(localStorage.getItem("tokenDetails"))
    : null,
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    userDetails: (state, action) => {
      // userDetails
      state.userDetails = action.payload?.user;
      localStorage.setItem("userDetails", JSON.stringify(action.payload?.user));

      // tokenDetails
      state.tokenDetails = action.payload?.token_details;
      localStorage.setItem(
        "tokenDetails",
        JSON.stringify(action.payload?.token_details)
      );
    },
    profileUpdate: (state, action) => {
      // userDetails
      state.userDetails = action.payload;
      localStorage.setItem("userDetails", JSON.stringify(action.payload));
    },
  },
});

export const { userDetails, profileUpdate } = authSlice.actions;
export const currentUser = (state: any) => state.userState.user;

export default authSlice.reducer;
