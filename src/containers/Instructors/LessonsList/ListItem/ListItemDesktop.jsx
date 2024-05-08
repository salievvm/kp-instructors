import { Grid } from "@mui/material";

import CustomCard from "../../../../components/@ui/CustomCard";
import { ListItemAddToCart } from './index';

import { BORDER_RADIUS_SM } from "../../../../theme/const";
import { listItemFormatValue } from "../../../../shared/lessons";

const ListItemAddToCartField = ({ minWidth, value, handleAddToCart, itemId }) => (
  <ListItemAddToCart
    value={value}
    onClick={() => handleAddToCart(itemId)}
    minWidth={minWidth}
  />
);

const ListItemField = ({ minWidth, value }) => (
  <Grid minWidth={minWidth} item>{value}</Grid>
);

export const ListItemDesktop = ({ schema, item, handleAddToCart }) => {
  const fields = Object.entries(schema);

  return (
    <CustomCard variant="filled" padding="6px 8px 6px 16px" borderRadius={BORDER_RADIUS_SM}>
      <Grid container justifyContent="space-between" alignItems="center">
        {fields.map(([code, field]) => {
          const { id, hidden, minWidth, format } = field;

          if (hidden) return null;
          if (id === 'price') return <ListItemAddToCartField
            key={id}
            minWidth={minWidth}
            value={listItemFormatValue(format, item[code])}
            handleAddToCart={handleAddToCart}
            itemId={item.id}
          />

          return <ListItemField
            key={id}
            minWidth={minWidth}
            value={listItemFormatValue(format, item[code])}
          />
        })}
      </Grid>
    </CustomCard >
  );
};