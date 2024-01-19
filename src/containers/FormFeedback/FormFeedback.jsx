import React from 'react';

import FormCandidateSectionList from './FormCandidateSectionList';

import useForm from './hooks/useForm';

const FormFeedback = () => {
  const {
    app,
    schema,
  } = useForm();

  return (
    <>{!app.send ? (
      <FormCandidateSectionList
        schema={schema}
      />
    ) : null}</>
  )
};

export default FormFeedback;