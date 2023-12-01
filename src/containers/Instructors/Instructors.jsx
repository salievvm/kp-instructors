import React from 'react';
import { Grid, Typography } from '@mui/material';
import CustomCard from '../../components/@ui/CustomCard';
import CustomTypography from '../../components/@ui/CustomTypography';
import Navigation from './Navigation';
import Filter from './Filter';
import Lessons from './Lessons';
import CustomBreadcrumbs from '../../components/@ui/CustomBreadcrumbs';
import Banner from './Banner';

import bg_banner_mobile from '../../assets/img/banner_mobile.jpg';

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
      <Grid item xs={12}>
        <CustomCard variant="banner" bg={bg_banner_mobile}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h2">Покупайте в магазине через приложение Красная Поляна</Typography>
              <Typography variant="body1">Чтобы скачать приложение Красная Поляна, наведите камеру смартфона на QR-код или выберите свой магазин приложений</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              
            </Grid>
          </Grid>
        </CustomCard>
      </Grid>
      <Grid item>
        <CustomTypography />
      </Grid>
    </Grid>
  );
};

export default Instructors;