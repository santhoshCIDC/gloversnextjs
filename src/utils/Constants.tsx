
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