import React from 'react';

import FormCandidateSectionList from './FormCandidateSectionList';

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
        <FormCandidateSectionList
          schema={schema}
        />
      ) : (
        <SuccessPage />
      )}
    </>
  )
};

export default FormFeedback;