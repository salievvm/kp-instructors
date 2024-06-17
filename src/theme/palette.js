import { BODY_COLOR,
  CONTRAST_TEXT_LIGHT,
  MAIN_TEXT,
  PRIMARY,
  RADIO_GROUP_DEFAULT,
  SECOND_TEXT,
  WARNING,
  WARNING_LIGHT,
} from "./colors";

const palette = {
  primary: {
    main: PRIMARY,
    light: PRIMARY,
    dark: PRIMARY,
    contrastText: CONTRAST_TEXT_LIGHT,
  },
  info: {
    main: BODY_COLOR,
    light: RADIO_GROUP_DEFAULT,
    dark: BODY_COLOR,
    contrastText: MAIN_TEXT,
  },
  warning: {
    main: WARNING,
    light: WARNING_LIGHT,
    dark: WARNING,
    contrastText: CONTRAST_TEXT_LIGHT,
  },
  button: {
    main: SECOND_TEXT,
  },
};

export default palette;
