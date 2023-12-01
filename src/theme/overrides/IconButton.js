import { BORDER_RADIUS_SM, BORDER_RADIUS_XS } from "../const";

export default function IconButton(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        sizeLarge: {
          borderRadius: BORDER_RADIUS_XS,
        },
        colorInfo: {
          backgroundColor: theme.palette.info.light,
          padding: BORDER_RADIUS_SM,
          "&:hover": {
            backgroundColor: theme.palette.info.light,
            filter: 'brightness(99%)',
          },
        },
        colorPrimary: {
          backgroundColor: theme.palette.primary.main,
          padding: 12,
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            filter: 'brightness(105%)',
          },
        },
      },
    },
  };
}
