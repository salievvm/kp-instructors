import { useSelector } from "react-redux";
import { obInstructorsService } from "../../../redux/actions";
import { useMemo } from "react";

export const useLessons = () => {
  const { lessons } = useSelector(state => state.instructors);

  const handleSortLessons = (fieldId) => {
    obInstructorsService.lessonsSort(fieldId);
  }

  const handleLessonAddToCart = async (lessonId) => {
    console.log({ lessonId });
    await obInstructorsService.lessonAddToCart(lessonId);
  }

  const isEmptyListFiltered = useMemo(() => !lessons.listFiltered.length, [lessons]);

  return {
    lessons,
    isEmptyListFiltered,
    handleSortLessons,
    handleLessonAddToCart,
  }
}