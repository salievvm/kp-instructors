import React from 'react';

import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { SearchIcon } from '../../../assets/icons';
import { CustomDateRange } from '../../../components/@ui/CustomFields';

const Filter = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item>
        <IconButton
          size="large"
          color="info"
        >
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Typography variant="h3">Подберите занятие</Typography>
          <Typography variant="caption">Улучшайте уровень катания с нами</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CustomDateRange theme="filled" label="Выберите даты" />
      </Grid>
      <Grid item>
        <Button size="large" color="button">Сбросить</Button>
      </Grid>
    </Grid>
  );
};

export default Filter;