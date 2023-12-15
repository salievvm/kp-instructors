import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';

export default function CustomCard({
  children,
  padding,
  borderRadius,
  margin,
  width,
  height,
  variant,
  bg,
  gradient,
}) {
  const sx = (theme) => ({
    base: {
      padding: '24px',
      [theme.breakpoints.down('sm')]: {
        padding: '24px',
      },
    },
    filled: {
      bgcolor: 'info.main',
      padding: '24px',
      [theme.breakpoints.down('sm')]: {
        padding: '24px',
      },
    },
    banner: {
      bgcolor: 'info.main',
      backgroundImage: gradient ? `linear-gradient(90deg, #1F1B2E 0%, rgba(31, 27, 46, 0.72) 25%, rgba(31, 27, 46, 0) 50%), url("${bg}")` : `url("${bg}")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      padding: '24px',
      height: 540,
      [theme.breakpoints.down('lg')]: {
        height: 440,
      },
      [theme.breakpoints.down('sm')]: {
        height: 392,
        padding: '24px',
        backgroundImage: gradient ? `linear-gradient(0deg, #1F1B2E 0%, rgba(31, 27, 46, 0.72) 25%, rgba(31, 27, 46, 0) 50%), url("${bg}")` : `url("${bg}")`,
        backgroundPosition: '70%',
      },
    },
  });

  return (
    <Paper
      elevation={0}
      style={{
        padding,
        width,
        margin,
        borderRadius,
      }}
      sx={(theme) => sx(theme)[variant]}
    >
      {children}
    </Paper>
  );
}

CustomCard.propTypes = {
  children: PropTypes.any.isRequired,
  padding: PropTypes.any,
  borderRadius: PropTypes.number,
  margin: PropTypes.any,
  width: PropTypes.any,
  variant: PropTypes.oneOf(['base', 'filled', 'banner']),
  gradient: PropTypes.bool,
};

CustomCard.defaultProps = {
  // padding: 48,
  width: '100%',
  margin: 0,
  variant: 'base',
  gradient: false,
};