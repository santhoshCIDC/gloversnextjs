// imports
import { configureStore } from "@reduxjs/toolkit";

//services
import { authService } from "./services/AuthService";
import { dashService } from "./services/DashboardService";

//reducers
import authReducer from "../redux/slices/AuthSlice";
import dashReducer from "../redux/slices/DashboardSlice";

import { teamService } from "./services/TeamListService";

export const store = configureStore({
  reducer: {
    authState: authReducer,
    teamMatricsState: dashReducer,

    [authService.reducerPath]: authService.reducer,
    [dashService.reducerPath]: dashService.reducer,
    [teamService.reducerPath]: teamService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authService.middleware,
      dashService.middleware,
      teamService.middleware,
    ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
