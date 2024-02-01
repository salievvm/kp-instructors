import React from 'react';

import he from 'he';

import { Button, Grid, Typography } from '@mui/material';
import Hidden from '@mui/material/Hidden';

import CustomAlertDialog from '../../../components/@ui/CustomAlertDialog/CustomAlertDialog';

// import bg_main from '../../../assets/img/bg_main.webp';
import CustomCard from '../../../components/@ui/CustomCard';
import useInstructors from '../hooks/useInstructors';
import FormFeedback from '../../FormFeedback';

const Banner = () => {
  const {
    bannerImage,
    activeLesson,
    isOpenForm,
    isDesktop,
    handleOpenForm,
    handleCloseForm,
  } = useInstructors();

  const {
    title,
    description,
  } = React.useMemo(() => {
    return { ...activeLesson };
  }, [activeLesson]);

  return (
    <>
      <CustomCard
        gradient
        variant="banner"
        height={540}
        bg={bannerImage}
      >
        <Grid container alignItems="flex-end" justifyContent="flex-start" height="100%">
          <Grid item xs={6}>
            <Grid container >
              <Grid item xs={12}>
                <Typography variant="h1" color="#fff" gutterBottom>{title}</Typography>
              </Grid>
              <Hidden lgDown>
                <Grid item lg={12}>
                  {description ? (
                    <Typography variant={isDesktop ? 'h6' : 'body1'} gutterBottom color="#fff" component="div">
                      <div dangerouslySetInnerHTML={{ __html: he.decode(description) }} />
                    </Typography>
                  ) : null}
                </Grid>
              </Hidden>
              <Grid item xs>
                <Button
                  onClick={handleOpenForm}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Оставить заявку
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CustomCard>
      <CustomAlertDialog
        open={isOpenForm}
        onClose={handleCloseForm}
        title={'Оставить заявку'}
        variant='right'
      >
        <FormFeedback />
      </CustomAlertDialog>
    </>
  );
};

export default Banner;