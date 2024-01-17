import React from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useSelector } from "react-redux";
import { obInstructorsService } from "../../../redux/actions";

const useInstructors = () => {
  const {
    app,
    instructors,
  } = useSelector(state => state);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

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
  
  const handleSortLessons = (fieldId) => {
    obInstructorsService.lessonsSort(fieldId);
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
    isDesktop,
    isTablet,
    getAll,
    handleLessonChose,
    handleSetFilter,
    handleUnsetFilter,
    handleSortLessons,
  }
};

export default useInstructors;