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
        containedSizeLarge: {
          padding: '6px 16px',
          lineHeight: '40px',
          textTransform: 'inherit',
          fontSize: theme.typography.button.fontSize,
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
      },
    },
  };
}
