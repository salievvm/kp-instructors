import React from 'react';

import { Grid, Skeleton, Typography } from '@mui/material';

import LessonsBody from './LessonsBody';
import LessonsHeader from './LessonsHeader';

import useInstructors from '../hooks/useInstructors';

import img from '../../../assets/img/emptystate.png';

const Lessons = () => {
  const {
    app,
    lessons
  } = useInstructors();

  return (
    <>
      {app.loading && !lessons.list.length ? (
        <>
          <Skeleton height={72} variant="rectangular" />
          <Skeleton height={72} variant="rectangular" />
          <Skeleton height={72} variant="rectangular" />
        </>
      ) : (
        !app.loading && !lessons.list.length ? (
          <Grid
            container
            direction="column"
            alignItems="center"
            gap={1}
          >
            <img src={img} width={335} />
            <Typography variant="h5">Поиск не дал результатов</Typography>
            <Typography variant="body2">Попробуйте изменить настройки или ослабить фильтры.</Typography>
          </Grid>
        ) : (
          <>
            <LessonsHeader schema={lessons.schema} />
            <LessonsBody schema={lessons.schema} data={lessons.list} />
          </>
        )
      )}
    </>
  );
};

export default Lessons;