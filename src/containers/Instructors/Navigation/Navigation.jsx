import React from 'react';
import { Typography } from '@mui/material';

import { obNavigation } from '../../../redux/actions/model';
import CustomList from '../../../components/@ui/CustomList/CustomList';

const Navigation = () => {
  const { schema } = obNavigation;

  return (
    <>
      <Typography variant="h3">Горные лыжи и сноуборд</Typography>
      <CustomList
        schema={schema.skis}
      />
    </>
  );
};

export default Navigation;