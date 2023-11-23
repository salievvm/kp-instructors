import React from 'react';
import { obNavigation } from '../../../redux/actions/model';
import CustomList from '../../../components/@ui/CustomList/CustomList';

const Navigation = () => {
  const { schema } = obNavigation;

  return (
    <CustomList
      schema={schema.skis}
    />
  );
};

export default Navigation;