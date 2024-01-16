import React from 'react';

import { useSelector } from "react-redux";
import { obInstructorsService } from "../../../redux/actions";

const useInstructors = () => {
  const {
    app,
    instructors,
  } = useSelector(state => state);

  const getAll = async () => {
    await obInstructorsService.get();
  }

  const {
    breadcrumbs,
    lessons,
    navigation,
  } = React.useMemo(() => {
    return { ...instructors };
  }, [instructors]);

  return {
    app,
    instructors,
    breadcrumbs,
    lessons,
    navigation,
    getAll,
  }
};

export default useInstructors;