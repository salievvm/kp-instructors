import React from 'react';
import { Grid, Typography } from '@mui/material';
import CustomCard from '../../components/@ui/CustomCard';
import CustomTypography from '../../components/@ui/CustomTypography';
import CustomList from '../../components/@ui/CustomList/CustomList';

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
          <Typography variant="h3">Горные лыжи и сноуборд</Typography>
          <CustomList />
        </CustomCard>
      </Grid>
      <Grid
        item
        xs={8}
      >
        <CustomCard variant="filled">123</CustomCard>
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