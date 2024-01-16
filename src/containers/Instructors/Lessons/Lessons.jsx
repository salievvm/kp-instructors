import React from 'react';

import { Skeleton } from '@mui/material';

import LessonsBody from './LessonsBody';
import LessonsHeader from './LessonsHeader';

import useInstructors from '../hooks/useInstructors';

const Lessons = () => {
  const {
    app,
    lessons
  } = useInstructors();

  return (
    <>
      <LessonsHeader schema={lessons.schema} />
      {app.loading && !lessons.list.length ? (
        <>
          <Skeleton height={72} variant="rectangular" />
          <Skeleton height={72} variant="rectangular" />
          <Skeleton height={72} variant="rectangular" />
        </>
      ) : (
        <LessonsBody schema={lessons.schema} data={lessons.list} />
      )}
    </>
  );
};

export default Lessons;