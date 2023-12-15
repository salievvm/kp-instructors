// import { MAIN_TEXT } from "../colors";
// import { BORDER_RADIUS_SM } from "../const";

export default function Chip(theme) {
  return {
    MuiChip: {
      styleOverrides: {
        sizeSmall: {
          // backgroundColor: theme.palette.info.main,
          fontWeight: 700,
        },
      },
    },
  };
}
