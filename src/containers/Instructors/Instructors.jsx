import React from 'react';
import { Grid, Typography } from '@mui/material';
import CustomCard from '../../components/@ui/CustomCard';
import CustomTypography from '../../components/@ui/CustomTypography';
import Navigation from './Navigation';
import Filter from './Filter';
import Lessons from './Lessons';
import CustomBreadcrumbs from '../../components/@ui/CustomBreadcrumbs';
import Banner from './Banner';

const links = [
  {
    href: '#',
    label: 'Главная',
  },
  {
    href: '#',
    label: 'Онлайн-магазин',
  },
  {
    href: '#',
    label: 'Категории',
  },
  {
    href: '#',
    label: 'Услуги',
  },
  {
    href: '#',
    label: 'Инструктора',
  },
];

const Instructors = ({ }) => {
  return (

    <Grid
      container
      spacing={2}
      marginTop="24px"
      marginBottom="24px"
    >
      <Grid item xs={12}>
        <Banner />
      </Grid>
      <Grid item xs={12}>
        <CustomBreadcrumbs links={links} />
      </Grid>
      <Grid item xs={4}
      >
        <CustomCard variant="filled">
          <Navigation />
        </CustomCard>
      </Grid>
      <Grid item xs={8}>
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
      <Grid item>
        <CustomTypography />
      </Grid>
    </Grid>
  );
};

export default Instructors;