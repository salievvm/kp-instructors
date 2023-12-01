import React from 'react';
import { Grid, Typography } from '@mui/material';
import CustomCard from '../../components/@ui/CustomCard';
import CustomTypography from '../../components/@ui/CustomTypography';
import Navigation from './Navigation';
import Filter from './Filter';
import Lessons from './Lessons';
import bg_main from '../../assets/img/bg_main.webp';
import CustomBreadcrumbs from '../../components/@ui/CustomBreadcrumbs';

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
        <CustomCard
          variant="banner"
          height={540}
          bg={bg_main}
        >
          <Grid container alignItems="flex-end" justifyContent="flex-start" height="100%">
            <Grid item xs={6}>
              <Grid container >
                <Grid item xs={12}>
                  <Typography variant="h1" color="#fff" gutterBottom>Индивидуальное занятие «Стандарт 2 часа»</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" gutterBottom color="#fff">Индивидуальная программа обучения с инструктором под ваш уровень катания. Доступно с 9:00 до 16:30, в дни вечерних катаний до 22:00.</Typography>
                  <Typography variant="body1" color="#fff">Для катания необходим дневной / вечерний ски-пасс или «Фаст-трек ИС» для прохода на подъёмники вне очереди (покупка в кассе). Начало занятия в Инструкторской службе 960.</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CustomCard>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <CustomBreadcrumbs links={links} />
      </Grid>
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