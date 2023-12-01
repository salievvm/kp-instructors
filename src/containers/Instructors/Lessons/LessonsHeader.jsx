import React from 'react';

import { Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { ArrowDownIcon } from '../../../assets/icons';

const LessonsHeader = ({
  schema
}) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      padding="6px 8px 6px 16px"
    >
      {Object.values(schema).map(({
        id,
        hidden,
        label,
        minWidth,
      }) => {
        return !hidden ? (
          <Grid minWidth={minWidth} item key={id}>
            <Grid container>
              <Typography variant="h4">
                {label}
              </Typography>
              <IconButton>
                <ArrowDownIcon />
              </IconButton>
            </Grid>
          </Grid>
        ) : null;
      })}
    </Grid>
  );
};

export default LessonsHeader;