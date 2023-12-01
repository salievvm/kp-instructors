import React from 'react';
import { useSelector } from "react-redux";

import { obLessons } from '../../../redux/actions/model';

import LessonsBody from './LessonsBody';
import LessonsHeader from './LessonsHeader';

const Lessons = () => {
  const { schema } = obLessons;

  const {
    instructors,
  } = useSelector(state => state);

  return (
    <>
      <LessonsHeader schema={schema}/>
      <LessonsBody schema={schema} data={instructors.list} />
    </>
  );
};

export default Lessons;