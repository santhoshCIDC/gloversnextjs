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
  teamMatrics:
    isLocalStorageAvailable() && localStorage.getItem("teamMatrics")
      ? JSON.parse(localStorage.getItem("teamMatrics") || "")
      : null,
};

export const dashSlice = createSlice({
  initialState,
  name: "dash",
  reducers: {
    authTokens: (state, action) => {
      state.teamMatrics = action.payload;
      if (isLocalStorageAvailable()) {
        localStorage.setItem("teamMatrics", action.payload);
      }
    },
  },
});

export const { authTokens } = dashSlice.actions;
export const currentUser = (state: any) => state.userState.user;

export default dashSlice.reducer;
