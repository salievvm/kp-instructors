import { BORDER_RADIUS_SM, BORDER_RADIUS_XS } from "../const";

export default function IconButton(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        sizeLarge: {
          borderRadius: BORDER_RADIUS_XS,
          padding: BORDER_RADIUS_SM,
          backgroundColor: theme.palette.info.light,
          "&:hover": {
            backgroundColor: theme.palette.info.light,
            filter: 'brightness(99%)',
          }
        },
      },
    },
  };
}
