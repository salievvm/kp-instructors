import { useSelector } from "react-redux";
import { obFormService, obInstructorsService } from "../../../redux/actions";

const useInstructors = () => {
  const { instructors } = useSelector(state => state);

  const category_id = parseInt(window.category_id);

  const getAll = async () => {
    obFormService.initializeSchema(category_id);
    await obInstructorsService.get();
  }
  
  return {
    getAll,
    instructors,
  }
};

export default useInstructors;