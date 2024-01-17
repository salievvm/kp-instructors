import React from 'react';

import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { SearchIcon } from '../../../assets/icons';
import { CustomDateRange } from '../../../components/@ui/CustomFields';
import useInstructors from '../hooks/useInstructors';

const Filter = () => {
  const minDate = new Date();
  const maxDate = new Date(2099, 1, 1);

  const {
    handleSetFilter,
    handleUnsetFilter,
    filter,
  } = useInstructors();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    >
      <Grid item>
        <Grid
          container
          spacing={1}
          alignItems="center"
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
        </Grid>
      </Grid>
      <Grid item xs={12} sm>
        <Grid
          container
          spacing={1}
          alignItems="center"
        >
          <Grid item xs>
            <CustomDateRange
              theme="filled"
              label="Выберите даты"
              minDate={minDate}
              maxDate={maxDate}
              onChange={handleSetFilter}
              value={[filter.startDate, filter.endDate]}
            />
          </Grid>
          <Grid item>
            <Button size="large" color="button" onClick={handleUnsetFilter}>Сбросить</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Filter;