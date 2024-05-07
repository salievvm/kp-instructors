import { useSelector } from "react-redux";
import { obInstructorsService } from "../../../redux/actions";

export const useLessons = () => {
  const { lessons } = useSelector(state => state.instructors);

  const handleSortLessons = (fieldId) => {
    obInstructorsService.lessonsSort(fieldId);
  }

  const handleLessonAddToCard = async (lessonId) => {
    await obInstructorsService.lessonAddToCart(lessonId);
  }

  return {
    lessons,
    handleSortLessons,
    handleLessonAddToCard,
  }
}