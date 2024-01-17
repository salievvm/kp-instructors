import React from 'react';
import { Grid, Typography, Skeleton } from '@mui/material';

import CustomList from '../../../components/@ui/CustomList/CustomList';

import useInstructors from '../hooks/useInstructors';
import CustomCard from '../../../components/@ui/CustomCard';

import icon from '../../../assets/icons/ArrowDown.svg';
import CustomAlertDialog from '../../../components/@ui/CustomAlertDialog/CustomAlertDialog';

const Navigation = () => {
  const {
    navigation,
    isDesktop,
    handleLessonChose,
  } = useInstructors();

  const title = 'Горные лыжи и сноуборд';

  const [isOpenModal, setOpenModal] = React.useState(false);

  console.log({ isOpenModal });

  const handleCloseModal = (lesson) => {
    setOpenModal(false);
    if (lesson) {
      handleLessonChose(lesson);
    }
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  return (
    <>
      {navigation.schema?.skis ? (
        isDesktop ? (
          <CustomCard variant="filled">
            <Typography variant="h3">Горные лыжи и сноуборд</Typography>
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
              onClick={handleOpenModal}
            >
              <Grid container alignItems="center" justifyContent="center" gap={1}>
                <img src={icon} height={24} />
                <Typography variant="h3">{title}</Typography>
              </Grid>
            </CustomCard>
            <CustomAlertDialog
              open={isOpenModal}
              onClose={() => handleCloseModal()}
              title={title}
            >
              <CustomList
                schema={navigation.schema.skis}
                activeItemId={navigation.activeLesson?.id}
                onClick={handleCloseModal}
              />
            </CustomAlertDialog>
          </>
        )
      ) : (
        <Skeleton height={isDesktop ? 200 : 72} variant="rectangular" />
      )}
    </>
  );
};

export default Navigation;