import React from 'react';

import { Button, Grid, Typography } from '@mui/material';

import FormCandidateSection from '../FormCandidateSection';
import useForm from '../hooks/useForm';
import { SECTION_TYPES } from '../../../consts';

const FormCandidateSectionList = ({
  schema,
}) => {
  const {
    handleSendForm,
  } = useForm();

  return (
    <Grid container direction="column" gap={2}>
      {schema ? Object.keys(schema).map((key) => {
        const sectionType = schema[key].type || SECTION_TYPES.base;
        return (
          <FormCandidateSection
            key={key}
            sectionType={sectionType}
            sectionCode={key}
            schema={schema}
          />
        )
      }) : null}
      <Button
        size='large'
        variant="contained"
        onClick={handleSendForm}
      >Отправить анкету</Button>
      <Typography variant="caption">
        Нажимая на кнопку «Отправить заявку», я даю свое согласие на обработку персональных данных, а также ознакомлен с политикой обработки и защиты персональных данных с правилами поведения на территории и пользования услугами Курорта Красная Поляна (НАО “Красная поляна”)
      </Typography>
    </Grid>
  );
};

export default FormCandidateSectionList;