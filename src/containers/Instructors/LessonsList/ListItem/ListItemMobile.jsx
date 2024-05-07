import { Grid, Typography } from "@mui/material";

import CustomCard from "../../../../components/@ui/CustomCard";
import { ListItemAddToCart } from "./index";

import { BORDER_RADIUS_SM } from "../../../../theme/const";
import { listItemFormatValue } from "../../../../shared/lessons";

const ListItemField = ({ id, label, value, handleAddToCart }) => {
  if (id === 'price') {
    return (
      <Grid item xs={12}>
        <ListItemAddToCart value={value} handleAddToCart={handleAddToCart} />
      </Grid>
    );
  }

  return <Grid item xs={6}>
    <Grid container direction="column" gap={0.2}>
      <Typography variant="caption">{label}</Typography>
      <Typography variant="body1">{value}</Typography>
    </Grid>
  </Grid>
};

export const ListItemMobile = ({ schema, item, handleAddToCart }) => {
  const fields = Object.entries(schema);

  return (
    <CustomCard variant="filled" padding="16px" borderRadius={BORDER_RADIUS_SM}>
      <Grid container justifyContent="space-between" alignItems="center" spacing={1}>
        {fields.map(([code, field]) => {
          const { id, hidden, format, label } = field;

          if (hidden) return null;

          return (
            <ListItemField
              key={id}
              id={id}
              label={label}
              value={listItemFormatValue(format, item[code])} 
              handleAddToCart={() => handleAddToCart(item.id)}
            />
          );
        })}
      </Grid >
    </CustomCard >
  );
};
