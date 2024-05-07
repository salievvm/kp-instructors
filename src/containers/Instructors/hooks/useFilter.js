import { useSelector } from "react-redux";
import { obInstructorsService } from "../../../redux/actions";

export const useFilter = () => {
  const { filter } = useSelector(state => state.instructors);
  
  const handleSetFilter = (value) => {
    obInstructorsService.setFilterDate(value[0], value[1]);
  }
  
  const handleUnsetFilter = () => {
    obInstructorsService.unsetFilterDate();
  }

  return {
    filter,
    handleSetFilter,
    handleUnsetFilter,
  }
}
