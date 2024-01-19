import React from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useSelector } from "react-redux";
import { obFormService, obInstructorsService } from "../../../redux/actions";

const useInstructors = () => {
  const {
    app,
    instructors,
    form,
  } = useSelector(state => state);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  const getAll = async () => {
    await obInstructorsService.get();
  }

  const handleLessonChose = async (lesson) => {
    await obInstructorsService.getLessonsHandler(lesson);
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

  const handleLessonAddToCard = async (lessonId) => {
    await obInstructorsService.lessonAddToCart(lessonId);
  }

  const { isOpenForm } = React.useMemo(() => {
    return form;
  }, [form]);

  const handleOpenForm = () => {
    obFormService.setOpenForm(true);
  }

  const handleCloseForm = () => {
    obFormService.setOpenForm(false);
  }

  const {
    breadcrumbs,
    lessons,
    navigation,
    filter,
  } = React.useMemo(() => {
    return { ...instructors };
  }, [instructors]);

  const {
    activeLesson,
  } = React.useMemo(() => {
    return { ...navigation };
  }, [navigation]);

  return {
    app,
    instructors,
    breadcrumbs,
    lessons,
    filter,
    navigation,
    isDesktop,
    isTablet,
    activeLesson,
    isOpenForm,
    handleOpenForm,
    handleCloseForm,
    handleLessonAddToCard,
    getAll,
    handleLessonChose,
    handleSetFilter,
    handleUnsetFilter,
    handleSortLessons,
  }
};

export default useInstructors;