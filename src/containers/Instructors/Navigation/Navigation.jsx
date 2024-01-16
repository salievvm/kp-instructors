import React from 'react';
import { Typography } from '@mui/material';

import CustomList from '../../../components/@ui/CustomList/CustomList';

import useInstructors from '../hooks/useInstructors';

const Navigation = () => {
  const {
    navigation,
    handleLessonChose,
  } = useInstructors();

  return (
    <>
      <Typography variant="h3">Горные лыжи и сноуборд</Typography>
      <CustomList
        schema={navigation.schema.skis}
        activeItemId={navigation.activeLesson}
        onClick={handleLessonChose}
      />
    </>
  );
};

export default Navigation;