import React from "react";
import { useSelector } from "react-redux";

import { obApp, obForm } from "../../../redux/actions/model";
import { obFormService } from "../../../redux/actions";

const useForm = () => {
  const {
    app,
    form,
  } = useSelector(state => state);
  
  const category_id = parseInt(window.category_id);

  const schema = React.useMemo(() => {
    return form.schema
  }, [form]);

  const handleMakeLoading = () => {
    obApp.setLoading();
    setTimeout(() => {
      obApp.endLoading();
    }, 2000)
  }

  const handleFieldChange = (section, subsection, code, value) => {
    obForm.setField(section, subsection, code, value);
  }

  const handleSendForm = async () => {
    await obFormService.send(category_id);
  }

  const handleAddSubSection = (section) => {
    obForm.addSubSection(section);
  }

  const handleRemoveSubSection = (section) => {
    obForm.removeSubSection(section);
  }

  const handleEraseSubSection = (section) => {
    obForm.eraseSubSection(section);
  }

  return {
    app,
    schema,
    handleMakeLoading,
    handleFieldChange,
    handleSendForm,
    handleAddSubSection,
    handleRemoveSubSection,
    handleEraseSubSection,
  }
};

export default useForm;