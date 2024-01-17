import React from 'react';

import he from 'he';

import { Grid, Typography } from '@mui/material';
import Hidden from '@mui/material/Hidden';

import bg_main from '../../../assets/img/bg_main.webp';
import CustomCard from '../../../components/@ui/CustomCard';
import useInstructors from '../hooks/useInstructors';

const Banner = () => {
  const {
    activeLesson,
  } = useInstructors();

  const {
    title,
    description,
  } = React.useMemo(() => {
    return { ...activeLesson };
  }, [activeLesson]);

  return (
    <CustomCard
      gradient
      variant="banner"
      height={540}
      bg={bg_main}
    >
      <Grid container alignItems="flex-end" justifyContent="flex-start" height="100%">
        <Grid item xs={6}>
          <Grid container >
            <Grid item xs={12}>
              <Typography variant="h1" color="#fff" gutterBottom>{title}</Typography>
            </Grid>
            <Hidden lgDown>
              <Grid item lg={12}>
                <Typography variant="body1" gutterBottom color="#fff">
                  <div dangerouslySetInnerHTML={{ __html:  he.decode(description) }} />
                </Typography>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default Banner;