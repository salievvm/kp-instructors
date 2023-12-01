import React from 'react';
import { Grid, Typography } from '@mui/material';
import CustomCard from '../../components/@ui/CustomCard';
import CustomTypography from '../../components/@ui/CustomTypography';
import Navigation from './Navigation';
import Filter from './Filter';
import Lessons from './Lessons';

const Instructors = ({ }) => {
  return (
    <Grid
      container
      spacing={2}
      margin="24px 0 24px 0"
    >
      <Grid
        item
        xs={4}
      >
        <CustomCard variant="filled">
          <Navigation />
        </CustomCard>
      </Grid>
      <Grid
        item
        xs={8}
      >
        <Grid
          container
          direction="column"
          gap={2}
        >
          <CustomCard variant="filled">
            <Filter />
          </CustomCard>
          <Lessons />
        </Grid>
      </Grid>
      <Grid
        item
      >
        <CustomTypography />
      </Grid>
    </Grid>
  );
};

export default Instructors;