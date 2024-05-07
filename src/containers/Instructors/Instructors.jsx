/* eslint-disable */

import React from 'react';
import { Grid } from '@mui/material';

import CustomCard from '../../components/@ui/CustomCard';
import CustomBreadcrumbs from '../../components/@ui/CustomBreadcrumbs';

import Filter from './Filter';
import Banner from './Banner';
import LessonsList from './LessonsList';
import Navigation from './Navigation';
import BannerMobile from './BannerMobile';

import useInstructors from './hooks/useInstructors';
import { useNavigation } from './hooks/useNavigation';

const Instructors = () => {
  const { getAll, isShowFeedbackButton } = useInstructors();
  const { breadcrumbs } = useNavigation();

  React.useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Grid
        container
        spacing={2}
        marginTop={6}
      >
        <Grid item xs={12}>
          <Banner showButton={isShowFeedbackButton} />
        </Grid>
        <Grid item xs={12}>
          <CustomBreadcrumbs links={breadcrumbs} />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Navigation />
        </Grid>
        <Grid item lg={8} xs={12}>
          <Grid
            container
            direction="column"
            gap={2}
            width="100%"
          >
            <CustomCard variant="filled">
              <Filter />
            </CustomCard>
            <LessonsList />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        gap={6}
        marginTop={6}
      >
        <BannerMobile />
        {/* <BannerSubscription /> */}
        {/* <CustomTypography /> */}
      </Grid>
    </>
  );
};

export default Instructors;