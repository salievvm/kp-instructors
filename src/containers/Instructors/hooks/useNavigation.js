import { useSelector } from "react-redux";
import { obInstructorsService } from "../../../redux/actions";
import { useMemo, useState } from "react";

export const useNavigation = () => {
  const [isOpenNavigationModal, setOpenModal] = useState(false);

  const { navigation, bannerImage, breadcrumbs } = useSelector(state => state.instructors);
  const { activeLesson } = useMemo(() => navigation, [navigation]);

  const handleLessonChose = async (lesson) => {
    await obInstructorsService.getLessonsHandler(lesson);
  }
  const handleCloseNavigationModal = (lesson) => {
    setOpenModal(false);
    if (lesson) {
      handleLessonChose(lesson);
    }
  }

  const handleOpenNavigationModal = () => setOpenModal(true);

  const title = navigation?.schema?.skis?.title;

  return {
    title,
    navigation,
    breadcrumbs,
    bannerImage,
    activeLesson,
    isOpenNavigationModal,
    handleLessonChose,
    handleOpenNavigationModal,
    handleCloseNavigationModal,
  }
}
