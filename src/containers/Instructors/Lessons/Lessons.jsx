import React from 'react';

import LessonsBody from './LessonsBody';
import LessonsHeader from './LessonsHeader';

import useInstructors from '../hooks/useInstructors';

const Lessons = () => {
  const {
    lessons
  } = useInstructors();

  return (
    <>
      <LessonsHeader schema={lessons.schema}/>
      <LessonsBody schema={lessons.schema} data={lessons.list} />
    </>
  );
};

export default Lessons;