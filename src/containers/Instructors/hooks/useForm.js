import { useMemo } from "react";
import { useSelector } from "react-redux";
import { obFormService } from "../../../redux/actions";

export const useForm = () => {
  const { form } = useSelector(state => state);

  const { isOpenForm } = useMemo(() => form, [form]);

  const handleOpenForm = () => obFormService.setOpenForm(true);
  const handleCloseForm = () => obFormService.setOpenForm(false);

  return {
    isOpenForm,
    handleOpenForm,
    handleCloseForm,
  }
}