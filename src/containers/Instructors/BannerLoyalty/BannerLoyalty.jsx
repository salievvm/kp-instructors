import { Button, Grid, Typography } from "@mui/material";

import styles from './index.module.css';
import { locales as t } from './locales';
import { useDeviceType } from "../../../shared/deviceType";

const LoyaltyButton = ({ fullWidth = false }) => (
  <Button
    size="large"
    target="blank"
    color="warning"
    variant="contained"
    href={t.detail.link}
    fullWidth={fullWidth}
  >
    {t.detail.label}
  </Button>
)

const MembershipButton = ({ fullWidth = false }) => (
  <Button
    size="large"
    target="blank"
    color="secondary"
    variant="contained"
    href={t.membership.link}
    fullWidth={fullWidth}
  >
    {t.membership.label}
  </Button>
)

const Mobile = () => {
  return (
    <div className={styles.root}>
      <Typography variant="h5" paddingBottom={2}>{t.title}</Typography>
      <div className={styles.container}>
        <Typography variant="body1">{t.text}</Typography>
        <div className={styles.image}></div>
      </div>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={6}>
          <LoyaltyButton fullWidth />
        </Grid>
        <Grid item xs={6}>
          <MembershipButton fullWidth />
        </Grid>
      </Grid>
    </div>
  )
};

const Desktop = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Grid container justifyContent="space-between" alignItems="center" gap={2}>
          <Grid item md={6} sm={10} xs={12}>
            <Grid container gap={1}>
              <Typography variant="h5">{t.title}</Typography>
              <Typography variant="body1">{t.text}</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container gap={2}>
              <LoyaltyButton />
              <MembershipButton />
            </Grid>
          </Grid>
        </Grid>
        <div className={styles.image}></div>
      </div>
    </div>
  )
}

export const BannerLoyalty = () => {
  const deviceType = useDeviceType();

  console.log({ deviceType });

  if (deviceType === 'desktop') return <Desktop />;
  
  return <Mobile />;
};
