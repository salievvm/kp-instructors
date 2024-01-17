import { BODY_COLOR,
  CONTRAST_TEXT_LIGHT,
  MAIN_TEXT,
  PRIMARY,
  RADIO_GROUP_DEFAULT,
  SECOND_TEXT,
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
  button: {
    main: SECOND_TEXT,
  },
};

export default palette;
