import React from 'react';

import { Grid } from '@mui/material';

import CustomCard from '../../../components/@ui/CustomCard';
import { BORDER_RADIUS_SM } from '../../../theme/const';
import { obLessons } from '../../../redux/actions/model';

import LessonAddToCard from './LessonAddToCart';

const data = [
  {
    id: 'test',
    dateStart: '01.01.2024',
    timeStart: '10:00',
    leftQuotas: '3',
    price: 6000,
  },
];

const Lessons = () => {
  const { schema } = obLessons;

  return (
    <>
      {data.map((item) => {
        return <CustomCard
          variant="filled"
          padding="6px 8px 6px 16px"
          borderRadius={BORDER_RADIUS_SM}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            {Object.values(schema).map(({
              id,
              hidden,
              type,
              format,
            }) => {
              const value = item[id];
              const _value = typeof format === 'function' ? format(value) : value;
              return !hidden ? <React.Fragment key={id}>
                {id === 'price' ? (
                  <LessonAddToCard value={_value} onClick={() => { }} />
                ) : (
                  <Grid item>{_value}</Grid>
                )}
              </React.Fragment> : null;
            })}
          </Grid>
        </CustomCard >
      })}
    </>
  );
};

export default Lessons;