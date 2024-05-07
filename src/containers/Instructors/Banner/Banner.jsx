import React from 'react';

import he from 'he';

import { Button, Grid, Typography } from '@mui/material';
import Hidden from '@mui/material/Hidden';

import CustomCard from '../../../components/@ui/CustomCard';
import CustomAlertDialog from '../../../components/@ui/CustomAlertDialog';

import FormFeedback from '../../FormFeedback';

import { useForm } from '../hooks/useForm';
import { useDeviceType } from '../../../shared/deviceType';
import { DEVICE_TYPES } from '../../../shared/consts';
import { useNavigation } from '../hooks/useNavigation';

const Banner = () => {
  const { isOpenForm, handleOpenForm, handleCloseForm } = useForm();

  const { bannerImage, activeLesson } = useNavigation();
  const { title, description } = React.useMemo(() => activeLesson ?? {}, [activeLesson]);
  
  const deviceType = useDeviceType();

  return (
    <>
      <CustomCard gradient variant="banner" height={540} bg={bannerImage}>
        <Grid container alignItems="flex-end" justifyContent="flex-start" height="100%">
          <Grid item xs={6}>
            <Grid container >
              <Grid item xs={12}>
                <Typography variant="h1" color="#fff" gutterBottom>{title}</Typography>
              </Grid>
              <Hidden lgDown>
                <Grid item lg={12}>
                  {description ? (
                    <Typography
                      variant={deviceType === DEVICE_TYPES.desktop ? 'h6' : 'body1'}
                      gutterBottom color="#fff" component="div"
                    >
                      <div dangerouslySetInnerHTML={{ __html: he.decode(description) }} />
                    </Typography>
                  ) : null}
                </Grid>
              </Hidden>
              {parseInt(window.category_id) !== 168 ? (
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
              ) : null}
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