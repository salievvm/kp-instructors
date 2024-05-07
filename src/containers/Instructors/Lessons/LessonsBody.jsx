import React from 'react';

import { Grid, Typography } from '@mui/material';

import CustomCard from '../../../components/@ui/CustomCard';

import LessonAddToCard from './LessonAddToCart';

import { DEVICE_TYPES } from '../../../shared/consts';
import { useDeviceType } from '../../../shared/deviceType';
import { BORDER_RADIUS_SM } from '../../../theme/const';

const LessonItemDesktop = ({
  schema,
  item,
  addToCart,
}) => {
  return (
    <CustomCard variant="filled" padding="6px 8px 6px 16px" borderRadius={BORDER_RADIUS_SM}>
      <Grid container justifyContent="space-between" alignItems="center">
        {Object.entries(schema).map((entry) => {
          const [code, { id, hidden, minWidth, format }] = entry;
          const value = item[code];
          const _value = typeof format === 'function' ? format(value) : value;
          return !hidden ? <React.Fragment key={id}>
            {id === 'price' ? (
              <LessonAddToCard value={_value} onClick={() => addToCart(item.id)} minWidth={minWidth} />
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
  addToCart,
}) => {
  return (
    <CustomCard variant="filled" padding="16px" borderRadius={BORDER_RADIUS_SM}
    >
      <Grid container justifyContent="space-between" alignItems="center" spacing={1}>
        {Object.entries(schema).map((entry) => {
          const [code, { id, hidden, format, label }] = entry;
          const value = item[code];
          const _value = typeof format === 'function' ? format(value) : value;

          if (!hidden) {
            if (id === 'price') {
              return (
                <Grid item xs={12} key={id}>
                  <LessonAddToCard value={_value} onClick={() => addToCart(item.id)} />
                </Grid>
              );
            }

            return (
              <Grid item xs={6} key={id}>
                <Grid container direction="column" gap={0.2}>
                  <Typography variant="caption">{label}</Typography>
                  <Typography variant="body1">{_value}</Typography>
                </Grid>
              </Grid>
            );
          }

          return null;
        })}
      </Grid >
    </CustomCard >
  );
};

const LessonsBody = ({
  data,
  schema,
  handleLessonAddToCard,
}) => {
  const deviceType = useDeviceType();

  const LessonItemProps = {
    schema: schema,
    addToCart: handleLessonAddToCard,
  }

  return (
    <Grid
      container
      spacing={2}
    >
      {data.map((item) => {
        return <Grid item key={item.id} xs={12} sm={6} md={12}>
          {deviceType === DEVICE_TYPES.tablet ? (
            <LessonItemDesktop item={item} { ...LessonItemProps } />
          ) : (
            <LessonItemMobile item={item} { ...LessonItemProps } />
          )}
        </Grid>
      })
      }
    </Grid>
  );
};

export default LessonsBody;