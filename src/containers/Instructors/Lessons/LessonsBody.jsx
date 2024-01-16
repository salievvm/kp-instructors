import React from 'react';

import { Grid } from '@mui/material';

import CustomCard from '../../../components/@ui/CustomCard';

import { BORDER_RADIUS_SM } from '../../../theme/const';
import LessonAddToCard from './LessonAddToCart';

const LessonsBody = ({
  schema,
  data,
}) => {
  return (
    data.map((item) => {
      return <CustomCard
        key={item.id}
        variant="filled"
        padding="6px 8px 6px 16px"
        borderRadius={BORDER_RADIUS_SM}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          {Object.entries(schema).map((entry) => {
            const [code, {
              id,
              hidden,
              minWidth,
              format,
            }] = entry;
            const value = item[code];
            const _value = typeof format === 'function' ? format(value) : value;
            return !hidden ? <React.Fragment key={id}>
              {id === 'price' ? (
                <LessonAddToCard value={_value} onClick={() => { }} minWidth={minWidth} />
              ) : (
                <Grid minWidth={minWidth} item>{_value}</Grid>
              )}
            </React.Fragment> : null;
          })}
        </Grid>
      </CustomCard >
    })
  );
};

export default LessonsBody;