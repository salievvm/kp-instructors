import React, { useMemo } from 'react';

import { Grid } from '@mui/material';

import { DEVICE_TYPES } from '../../../../shared/consts';
import { useDeviceType } from '../../../../shared/deviceType';
import { ListItemDesktop, ListItemMobile } from '../ListItem';

export const ListBody = ({ data, schema, handleLessonAddToCard }) => {
  const deviceType = useDeviceType();

  const ListItemProps = {
    schema: schema,
    handleAddToCart: handleLessonAddToCard,
  }

  const isMobile = useMemo(() => deviceType === DEVICE_TYPES.mobile, [deviceType]);

  console.log({ deviceType });

  return (
    <Grid container spacing={2}>
      {data.map((item) => {
        return (
          <Grid item key={item.id} xs={12} sm={6} md={12}>
            {isMobile ? (
              <ListItemMobile item={item} { ...ListItemProps } />
            ) : (
              <ListItemDesktop item={item} { ...ListItemProps } />
            )}
          </Grid>
        )
      })
      }
    </Grid>
  );
};
