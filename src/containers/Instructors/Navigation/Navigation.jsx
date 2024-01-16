import React from 'react';
import { Typography, Skeleton } from '@mui/material';

import CustomList from '../../../components/@ui/CustomList/CustomList';

import useInstructors from '../hooks/useInstructors';
import CustomCard from '../../../components/@ui/CustomCard';

const Navigation = () => {
  const {
    navigation,
    handleLessonChose,
  } = useInstructors();

  return (
    <>
      {navigation.schema?.skis ? (
        <CustomCard variant="filled">

          <Typography variant="h3">Горные лыжи и сноуборд</Typography>
          <CustomList
            schema={navigation.schema.skis}
            activeItemId={navigation.activeLesson}
            onClick={handleLessonChose}
          />
        </CustomCard>

      ) : (
        <Skeleton height={200} variant="rectangular" />
      )}
    </>
  );
};

export default Navigation;