import { BORDER_RADIUS_SM } from "../const";

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: BORDER_RADIUS_SM,
          boxShadow: 'none',
          '&:hover, &:active': {
            boxShadow: 'none',
          }, 
        },
        textSizeSmall: {
          textTransform: 'inherit',
          fontSize: theme.typography.caption.fontSize,
          fontWeight: theme.typography.caption.fontWeight,
          lineHeight: theme.typography.caption.lineHeight,
          color: theme.typography.caption.color,
        },
        containedSizeMedium: {
          padding: '6px 16px',
          lineHeight: '40px',
          textTransform: 'inherit',
          fontSize: theme.typography.button.fontSize,
        },
        containedSizeLarge: {
          padding: '6px 16px',
          minWidth: '175px',
          lineHeight: '40px',
          textTransform: 'inherit',
          fontSize: theme.typography.button.fontSize,
          [theme.breakpoints.down('sm')]: {
            minWidth: 'auto',
          }
        },
        containedSecondary: {
          backgroundColor: theme.palette.primary.contrastText,
          color: theme.palette.info.contrastText,
          padding: 12,
          "&:hover": {
            backgroundColor: theme.palette.primary.contrastText,
            filter: 'brightness(99%)',
          },
        },
        containedWarning: {
          backgroundColor: theme.palette.warning.main,
          color: theme.palette.warning.contrastText,
          padding: 12,
          "&:hover": {
            backgroundColor: theme.palette.warning.light,
            filter: 'brightness(99%)',
          },
        },
      },
    },
  };
}
