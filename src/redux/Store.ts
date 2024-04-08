import authReducer from "../redux/slices/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";
import { authService } from "./services/AuthService";

export const store = configureStore({
  reducer: {
    authState: authReducer,
    [authService.reducerPath]: authService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(
      [
        authService.middleware,
      ]
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;  
