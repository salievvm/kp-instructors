import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';

export default function CustomCard({
  children,
  padding,
  borderRadius,
  margin,
  width,
  variant,
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
  variant: PropTypes.oneOf(['base', 'filled']),
};

CustomCard.defaultProps = {
  // padding: 48,
  width: '100%',
  margin: 0,
  variant: 'base',
};