import React from 'react';

import { Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import CustomCard from '../../../components/@ui/CustomCard';
import { BORDER_RADIUS_SM } from '../../../theme/const';
import { obLessons } from '../../../redux/actions/model';

import LessonAddToCard from './LessonAddToCart';
import { ArrowDownIcon } from '../../../assets/icons';

const data = [
  {
    id: 'test',
    dateStart: '01.01.2024',
    parentId: 'standart_individual_1hour',
    timeStart: '10:00',
    leftQuotas: '1',
    price: 6000,
  },
  {
    id: 'test',
    parentId: 'standart_individual_1hour',
    dateStart: '01.01.2024',
    timeStart: '11:00',
    leftQuotas: '3',
    price: 6000,
  },
  {
    id: 'test',
    parentId: 'standart_individual_1hour',
    dateStart: '01.01.2024',
    timeStart: '12:00',
    leftQuotas: '2',
    price: 6000,
  },
];

const LessonsHeader = ({
  schema
}) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      padding="6px 8px 6px 16px"
    >
      {Object.values(schema).map(({
        id,
        hidden,
        label,
        minWidth,
      }) => {
        return !hidden ? (
          <Grid minWidth={minWidth} item key={id}>
            <Grid container>
              <Typography variant="h4">
                {label}
              </Typography>
              <IconButton>
                <ArrowDownIcon />
              </IconButton>
            </Grid>
          </Grid>
        ) : null;
      })}
    </Grid>
  );
};

const LessonsBody = ({
  schema,
  data,
}) => {
  return (
    data.map((item) => {
      return <CustomCard
        variant="filled"
        padding="6px 8px 6px 16px"
        borderRadius={BORDER_RADIUS_SM}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          {Object.values(schema).map(({
            id,
            hidden,
            minWidth,
            format,
          }) => {
            const value = item[id];
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

const Lessons = () => {
  const { schema } = obLessons;

  return (
    <>
      <LessonsHeader schema={schema}/>
      <LessonsBody schema={schema} data={data} />
    </>
  );
};

export default Lessons;