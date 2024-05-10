// imports
import { configureStore } from "@reduxjs/toolkit";

//services
import { authService } from "./services/AuthService";
import { dashService } from "./services/DashboardService";
import { teamService } from "./services/TeamListService";
import { seasonService } from "./services/SeasonService";
import { userService } from "./services/UserListService";
import { eventService } from "./services/EventListService";
import { subscriptionService } from "./services/SubscriptionService";

//reducers
import authReducer from "../redux/slices/AuthSlice";
import dashReducer from "../redux/slices/DashboardSlice";

export const store = configureStore({
  reducer: {
    authState: authReducer,
    teamMatricsState: dashReducer,

    [authService.reducerPath]: authService.reducer,
    [dashService.reducerPath]: dashService.reducer,
    [teamService.reducerPath]: teamService.reducer,
    [seasonService.reducerPath]: seasonService.reducer,
    [userService.reducerPath]: userService.reducer,
    [eventService.reducerPath]: eventService.reducer,
    [subscriptionService.reducerPath]: subscriptionService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authService.middleware,
      dashService.middleware,
      teamService.middleware,
      seasonService.middleware,
      userService.middleware,
      eventService.middleware,
      subscriptionService.middleware,
    ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
