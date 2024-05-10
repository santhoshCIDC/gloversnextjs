//Auth
export const AUTH_API = {
  LOGIN: "v1/auth/adminlogin",
  FORGOT_PASSWORD: "v1/auth/forgotPassword",
};

export const DASHBOARD_API = {
  EVENTS_TABS: "v1/user/admin/events-tabs",
  USER_MATRICS: "v1/user/admin/user-matrics",
  EVENT_MATRICS: "v1/user/admin/events-matrics",
  TEAM_MATRICS: "v1/user/admin/team-matrics",
  ROLE_MATRICS: "v1/user/admin/role-matrics",
  GLOBAL_SEARCH: "v1/user/admin/global-search",
};

export const TEAM_LIST_API = {
  TEAM_LIST: "/v1/user/admin/teams-list?",
};

export const SEASON_API = {
  SEASON_LIST: "/v1/user/season",
  SEASON_CREATE: "/v1/user/admin/season-create",
  DELETE_SEASON: "/v1/user/inactive_season",
};

export const USER_LIST_API = {
  COACH_LIST: "v1/user/admin/coach-list?",
  STAFF_LIST: "v1/user/admin/staffs-list?",
  PLAYER_LIST: "v1/user/admin/players-list?",
  FAN_LIST: "v1/user/admin/fans-list?",
};

export const EVENT_LIST_API = {
  EVENT_LIST: "v1/user/admin/events-tabs?",
};

export const SUBSCRIPTION_API = {
  SUBSCRIPTION_PLAN: "v1/user/admin/get_subscription_plans",
  PROMO_CODE_LIST: "v1/user/admin/get_promocodes",
  CREATE_PROMO_CODE: "v1/user/admin/create_promocodes",
  DELETE_PROMO_CODE: "/v1/user/admin/delete_promocodes",
  TRANSACTION_LIST: "/v1/user/admin/get_trancastion_details?",
};
