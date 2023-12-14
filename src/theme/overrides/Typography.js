export default function Typography(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        h1: {
          [theme.breakpoints.down('md')]: {
            fontSize: '32px',
            lineHeight: '36px',
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '28px',
            lineHeight: '32px',
          },
          // // Другие стили для более крупных экранов (sm, md, lg, xl)
          // [theme.breakpoints.up('sm')]: {
          //   fontSize: '40px',
          //   lineHeight: '48px',
          // },
        },
        h2: {
          [theme.breakpoints.down('lg')]: {
            fontSize: '24px',
            lineHeight: '28px',
          },
        },
        h5: {
          [theme.breakpoints.down('md')]: {
            fontSize: '20px',
            lineHeight: '24px',
          },
        },
      },
    },
  };
}
