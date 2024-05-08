import React, { useMemo } from 'react';

import { Grid } from '@mui/material';

import { DEVICE_TYPES } from '../../../../shared/consts';
import { useDeviceType } from '../../../../shared/deviceType';
import { ListItemDesktop, ListItemMobile } from '../ListItem';
import { useLessons } from '../../hooks/useLessons';

export const ListBody = ({ data, schema }) => {
  const deviceType = useDeviceType();

  const { handleLessonAddToCart } = useLessons();

  const ListItemProps = {
    schema: schema,
    handleAddToCart: handleLessonAddToCart,
  }

  const isMobile = useMemo(() => deviceType === DEVICE_TYPES.mobile, [deviceType]);

  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={12}>
          {isMobile ? (
            <ListItemMobile item={item} { ...ListItemProps } />
          ) : (
            <ListItemDesktop item={item} { ...ListItemProps } />
          )}
        </Grid>
      ))}
    </Grid>
  );
};
