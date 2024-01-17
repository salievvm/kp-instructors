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

  const handleLessonChose = async (productId) => {
    await obInstructorsService.getLessonsHandler(productId);
  }

  const handleSetFilter = (value) => {
    obInstructorsService.setFilterDate(value[0], value[1]);
  }
  
  const handleUnsetFilter = () => {
    obInstructorsService.unsetFilterDate();
  }

  const {
    breadcrumbs,
    lessons,
    navigation,
    filter,
  } = React.useMemo(() => {
    return { ...instructors };
  }, [instructors]);

  return {
    app,
    instructors,
    breadcrumbs,
    lessons,
    filter,
    navigation,
    getAll,
    handleLessonChose,
    handleSetFilter,
    handleUnsetFilter,
  }
};

export default useInstructors;