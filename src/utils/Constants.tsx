export const REGEX = {
  NAME: /^[a-zA-Z]*$/,
  PASSWORD: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
  EMAIL:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const COLOR = {
  BUTTON_COLOR: "#005DAB",
  WHITE_COLOR: "#FFFFFF",
  APP_COLOR: "#253EC8",
  BLACK_COLOR: "#000000",
  GREY_COLOR: "#808080",
  WHITE_SMOKE: "#BFBFBF",
  LIGHT_GREY: "#f8f9fa",
};

export const MESSAGE = {
  SEASONS_EMPTY_MESSAGE: "Seasons are not found",
  TEAMS_EMPTY_MESSAGE: "Teams are not found",
  LIVE_EMPTY_MESSAGE: "Live events are not found",
  RECENT_EMPTY_MESSAGE: "Recent events are not found",
  UPCOMING_EMPTY_MESSAGE: "Upcoming events are not found",
  COACH_EMPTY_MESSAGE: "Coaches are not found",
  STAFF_EMPTY_MESSAGE: "Staffs are not found",
  PLAYER_EMPTY_MESSAGE: "Players are not found",
  FAN_EMPTY_MESSAGE: "Fans are not found",
  TRANSCATION_EMPTY_MESSAGE: "Transcations are not found",
};
