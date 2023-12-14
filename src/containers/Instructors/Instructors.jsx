import React from 'react';
import { Grid } from '@mui/material';
import { useSelector } from "react-redux";

import CustomCard from '../../components/@ui/CustomCard';
import CustomTypography from '../../components/@ui/CustomTypography';
import Navigation from './Navigation';
import Filter from './Filter';
import Lessons from './Lessons';
import CustomBreadcrumbs from '../../components/@ui/CustomBreadcrumbs';
import Banner from './Banner';
import BannerMobile from './BannerMobile';
import BannerSubscription from './BannerSubscription';

const Instructors = ({ }) => {
  const {
    instructors,
  } = useSelector(state => state);

  const breadcrumbs = React.useMemo(() => {
    return instructors.breadcrumbs;
  }, [instructors]);

  return (
    <>
      <Grid
        container
        spacing={2}
        marginTop={6}
      >
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={12}>
          <CustomBreadcrumbs links={breadcrumbs} />
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
      </Grid>
      <Grid
        container
        gap={6}
        marginTop={6}
      >
        <BannerMobile />
        <BannerSubscription />
        <CustomTypography />
      </Grid>
    </>
  );
};

export default Instructors;