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
      backgroundImage: `linear-gradient(90deg, #1F1B2E 0%, rgba(31, 27, 46, 0.72) 25%, rgba(31, 27, 46, 0) 50%), url("${bg}")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      padding: '24px',
      [theme.breakpoints.down('sm')]: {
        padding: '24px',
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
        height,
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
  variant: PropTypes.oneOf(['base', 'filled']),
};

CustomCard.defaultProps = {
  // padding: 48,
  width: '100%',
  margin: 0,
  variant: 'base',
};