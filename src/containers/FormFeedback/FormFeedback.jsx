import React from 'react';

import FormFeedbackSectionList from './FormFeedbackSectionList';

import useForm from './hooks/useForm';
import SuccessPage from '../SuccessPage';

const FormFeedback = () => {
  const { app, schema } = useForm();

  if (app.send) return <SuccessPage />;

  return <FormFeedbackSectionList schema={schema} />
};

export default FormFeedback;