import React from 'react';

import { Grid, Typography } from '@mui/material';

import CustomCard from '../../../components/@ui/CustomCard';

import { BORDER_RADIUS_SM } from '../../../theme/const';
import LessonAddToCard from './LessonAddToCart';
import useInstructors from '../hooks/useInstructors';

const LessonItemDesktop = ({
  schema,
  item,
}) => {
  return (
    <CustomCard
      variant="filled"
      padding="6px 8px 6px 16px"
      borderRadius={BORDER_RADIUS_SM}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
      >
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
  );
};

const LessonItemMobile = ({
  schema,
  item,
}) => {
  return (
    <CustomCard
      variant="filled"
      padding="16px"
      borderRadius={BORDER_RADIUS_SM}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        {Object.entries(schema).map((entry) => {
          const [code, {
            id,
            hidden,
            minWidth,
            format,
            label,
          }] = entry;
          const value = item[code];
          const _value = typeof format === 'function' ? format(value) : value;

          if (!hidden) {
            if (id === 'price') {
              return (
                <Grid item xs={12}>
                  <LessonAddToCard value={_value} onClick={() => { }} />
                </Grid>
              );
            }

            return (
              <Grid item xs={6}>
                <Grid container direction="column" gap={0.2}>
                  <Typography variant="caption">{label}</Typography>
                  <Typography variant="body1">{_value}</Typography>
                </Grid>
              </Grid>
            );
          }
        })}
      </Grid >
    </CustomCard >
  );
};

const LessonsBody = ({
  schema,
  data,
}) => {
  const {
    isTablet,
  } = useInstructors();

  return (
    <Grid
      container
      spacing={2}
      // width="100%"
    >
      {data.map((item) => {
        return <Grid
          item
          key={item.id}
          xs={12}
          sm={6}
          md={12}
        >
          {isTablet ? (
            <LessonItemDesktop schema={schema} item={item} />
          ) : (
            <LessonItemMobile schema={schema} item={item} />
          )}
        </Grid>
      })
      }
    </Grid>
  );
};

export default LessonsBody;