import { useSelector } from "react-redux";
import { obFormService, obInstructorsService } from "../../../redux/actions";
import { useMemo } from "react";
import { CATEGORIES } from "../../../shared/consts";

const useInstructors = () => {
  const { instructors, params } = useSelector(state => state);

  const getAll = async () => {
    obFormService.initializeSchema();
    await obInstructorsService.get();
  }

  const { categoryId } = useMemo(() => params, [params]);

  const isShowFeedbackButton = useMemo(() => (
    categoryId && CATEGORIES[categoryId]?.schema !== 'fitness'
  ), [categoryId]);
  
  return {
    getAll,
    params,
    instructors,
    isShowFeedbackButton,
  }
};

export default useInstructors;