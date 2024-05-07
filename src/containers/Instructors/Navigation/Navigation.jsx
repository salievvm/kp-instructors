import React from 'react';
import { Grid, Typography, Skeleton } from '@mui/material';

import CustomList from '../../../components/@ui/CustomList';
import CustomCard from '../../../components/@ui/CustomCard';
import CustomAlertDialog from '../../../components/@ui/CustomAlertDialog';

import { useDeviceType } from '../../../shared/deviceType';
import { DEVICE_TYPES } from '../../../shared/consts';
import { useNavigation } from '../hooks/useNavigation';
import useInstructors from '../hooks/useInstructors';

import icon from '../../../assets/icons/ArrowDown.svg';

const Navigation = () => {
  const { params } = useInstructors();

  const {
    title,
    navigation,
    isOpenNavigationModal,
    handleLessonChose,
    handleOpenNavigationModal,
    handleCloseNavigationModal,
  } = useNavigation();

  const deviceType = useDeviceType();

  return (
    <>
      {navigation.schema?.skis ? (
        deviceType === DEVICE_TYPES.desktop ? (
          <CustomCard variant="filled">
            <Typography variant="h3">{title}</Typography>
            <CustomList
              schema={navigation.schema.skis}
              activeItemId={navigation.activeLesson?.id}
              onClick={handleLessonChose}
            />
          </CustomCard>
        ) : (
          <>
            <CustomCard
              variant="filled"
              onClick={handleOpenNavigationModal}
            >
              <Grid container alignItems="center" justifyContent="center" gap={1}>
                <img src={`${params.rootDirectory}${icon}`} height={24} alt='icon' />
                <Typography variant="h3">{title}</Typography>
              </Grid>
            </CustomCard>
            <CustomAlertDialog
              open={isOpenNavigationModal}
              onClose={() => handleCloseNavigationModal()}
              title={title}
            >
              <CustomList
                schema={navigation.schema.skis}
                activeItemId={navigation.activeLesson?.id}
                onClick={handleCloseNavigationModal}
              />
            </CustomAlertDialog>
          </>
        )
      ) : (
        <Skeleton height={deviceType === DEVICE_TYPES.desktop ? 200 : 72} variant="rectangular" />
      )}
    </>
  );
};

export default Navigation;