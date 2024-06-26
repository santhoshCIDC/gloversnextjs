//Auth
export const AUTH_API = {
  LOGIN: "v1/auth/adminlogin",
  FORGOT_PASSWORD: "v1/auth/forgotPassword",
  REFRESH_TOKEN: "v1/auth/refresh_token",
  EDIT_PROFILE: "v1/user/profile-update",
  CHANGE_PASSWORD: "v1/auth/changePassword",
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
  TEAM_RESPONSIBILITY_LIST: "v1/user/admin/team-responsibility",
  STAFF_RESPONSIBILITY_LIST: "v1/user/admin/staff-responsibility",
  UPDATE_COACH_STATUS: "v1/user/admin/update-coach-status",
  UPDATE_STAFF_STATUS: "v1/user/admin/update-staff-status",
  UPDATE_PLAYER_STATUS: "v1/user/admin/update-player-status",
  UPDATE_FAN_STATUS: "v1/user/admin/update-fan-status",
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

export const SETTINGS_API = {
  EVENT_CREATION_SETTINGS: "v1/user/admin/eventcreation-settings",
  EVENT_SETTINGS: "v1/user/admin/event-settings",
};
