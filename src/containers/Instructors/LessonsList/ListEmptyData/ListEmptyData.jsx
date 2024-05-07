import { Chip, Grid, Typography } from "@mui/material";

import CustomCard from "../../../../components/@ui/CustomCard";

import { useFilter } from "../../hooks/useFilter";

import img from '../../../../assets/img/emptystate.png';

export const ListEmptyData = () => {
  const { filter, handleUnsetFilter } = useFilter();

  return (
    <CustomCard>
      <Grid container direction="column"alignItems="center" gap={1}>
        <img src={`${window.ROOT_DIRECTORY}${img}`} width={335} alt='Not success' />

        <Typography variant="h5">Поиск не дал результатов</Typography>
        {filter.startDate ? (
          <>
            <Typography variant="body2">Выберите другой тариф или измените фильтр.</Typography>
            <Chip
              label={`${filter.startDate} - ${filter.endDate}`}
              variant="contained"
              onDelete={handleUnsetFilter}
              color="primary"
            />
          </>
        ) : (
          <Typography variant="body2">Выберите другой тариф в левом меню.</Typography>
        )}
      </Grid>
    </CustomCard>
  );
};
