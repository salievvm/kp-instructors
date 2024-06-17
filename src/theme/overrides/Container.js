import { CONTAINER_WIDTH_XL } from "../const";

export default function Container(theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingBottom: 48,
          paddingTop: 48,
          maxWidth: CONTAINER_WIDTH_XL,
          // paddingLeft: 0,
          // paddingRight: 0,
          [theme.breakpoints.up('lg')]: {
            maxWidth: CONTAINER_WIDTH_XL,
            // paddingLeft: 0,
            // paddingRight: 0,
          },
          [theme.breakpoints.down('sm')]: {
            minWidth: 360,
            // paddingLeft: 0,
            // paddingRight: 0,
          },
        },
      },
    },
  };
}
