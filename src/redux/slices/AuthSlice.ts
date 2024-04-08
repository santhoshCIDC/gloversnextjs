import { createSlice } from "@reduxjs/toolkit";

const isLocalStorageAvailable = () => {
  try {
    const testKey = "__testKey__";
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

const initialState = {
  token:
    isLocalStorageAvailable() && localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token") || "")
      : null,
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    authTokens: (state, action) => {
      state.token = action.payload;
      if (isLocalStorageAvailable()) {
        localStorage.setItem("token", action.payload);
      }
    },
  },
});

export const { authTokens } = authSlice.actions;
export const currentUser = (state: any) => state.userState.user;

export default authSlice.reducer;
