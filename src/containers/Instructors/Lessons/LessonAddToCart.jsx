import CustomCard from '../../../components/@ui/CustomCard';

import { Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { CartIcon } from '../../../assets/icons';
import { BORDER_RADIUS_SM } from '../../../theme/const';


const LessonAddToCard = ({ value, onClick, minWidth }) => {
  return (
    <Grid minWidth={minWidth} item>
      <CustomCard
        width="auto"
        padding="6px 6px 6px 16px"
        borderRadius={BORDER_RADIUS_SM}
      >
        <Grid container justifyContent="space-between" alignItems="center" gap={2}>
          <Typography variant="h3">{value}</Typography>
          <IconButton
            size="large"
            color="primary"
            onClick={onClick}
          >
            <CartIcon />
          </IconButton>
        </Grid>
      </CustomCard>
    </Grid>
  );
};

export default LessonAddToCard;