import { useSelector } from "react-redux";
import { obFormService, obInstructorsService } from "../../../redux/actions";

const useInstructors = () => {
  const { app, instructors } = useSelector(state => state);

  const category_id = parseInt(window.category_id);

  const getAll = async () => {
    obFormService.initializeSchema(category_id);
    await obInstructorsService.get();
  }
  
  return {
    app,
    instructors,
    getAll,
  }
};

export default useInstructors;