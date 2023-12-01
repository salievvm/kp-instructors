import { Grid, Typography } from '@mui/material';
import Hidden from '@mui/material/Hidden';

import bg_main from '../../../assets/img/bg_main.webp';
import CustomCard from '../../../components/@ui/CustomCard';

const Banner = () => {
  return (
    <CustomCard
      gradient
      variant="banner"
      height={540}
      bg={bg_main}
    >
      <Grid container alignItems="flex-end" justifyContent="flex-start" height="100%">
        <Grid item xs={6}>
          <Grid container >
            <Grid item xs={12}>
              <Typography variant="h1" color="#fff" gutterBottom>Индивидуальное занятие «Стандарт 2 часа»</Typography>
            </Grid>
            <Hidden lgDown>
              <Grid item lg={12}>
                <Typography variant="body1" gutterBottom color="#fff">Индивидуальная программа обучения с инструктором под ваш уровень катания. Доступно с 9:00 до 16:30, в дни вечерних катаний до 22:00.</Typography>
                <Typography variant="body1" color="#fff">Для катания необходим дневной / вечерний ски-пасс или «Фаст-трек ИС» для прохода на подъёмники вне очереди (покупка в кассе). Начало занятия в Инструкторской службе 960.</Typography>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default Banner;