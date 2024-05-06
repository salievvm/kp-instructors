import React from 'react';

import FormFeedbackSectionList from './FormFeedbackSectionList';

import useForm from './hooks/useForm';
import SuccessPage from '../SuccessPage';

const FormFeedback = () => {
  const {
    app,
    schema,
  } = useForm();

  return (
    <>
      {!app.send ? (
        <FormFeedbackSectionList
          schema={schema}
        />
      ) : (
        <SuccessPage />
      )}
    </>
  )
};

export default FormFeedback;