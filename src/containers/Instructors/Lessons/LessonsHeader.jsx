import React from 'react';

import { Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { ArrowDownIcon } from '../../../assets/icons';
import { DEVICE_TYPES } from '../../../shared/consts';
import { useDeviceType } from '../../../shared/deviceType';

import useInstructors from '../hooks/useInstructors';

const LessonsHeader = ({ schema }) => {
  const { handleSortLessons } = useInstructors();

  const deviceType = useDeviceType();

  return (
    deviceType === DEVICE_TYPES.tablet ? (
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        padding="6px 8px 6px 16px"
      >
        {Object.values(schema).map(({ id, hidden, label, minWidth }) => {
          return !hidden ? (
            <Grid minWidth={minWidth} item key={id}>
              <Grid container>
                <Typography variant="h4">
                  {label}
                </Typography>
                <IconButton onClick={() => handleSortLessons(id)}>
                  <ArrowDownIcon />
                </IconButton>
              </Grid>
            </Grid>
          ) : null;
        })}
      </Grid>
    ) : null
  );
};

export default LessonsHeader;