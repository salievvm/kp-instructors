import React from "react";

import { Hidden, Button, IconButton, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

import bg_banner_mobile from '../../../assets/img/mob_banner_phones.png';
import qr_icon from '../../../assets/img/qr_icon.png';

import { AppleStoreIcon, GooglePlayIcon, KPLogoMin } from '../../../assets/icons';

import CustomCard from "../../../components/@ui/CustomCard";

const CustomImg = styled('img')(({ theme }) => ({
  maxHeight: 400,
  maxWidth: 'calc(100% - 48px)',
  [theme.breakpoints.down('sm')]: {
    maxHeight: 162,
    maxWidth: 'calc(100% - 96px)',
  }
}));

const BannerMobile = () => {
  return (
    <CustomCard
      variant="filled"
      padding={0}
    >
      <Grid container
        alignItems="flex-end"
        sx={{
          textAlign: {
            xs: 'center',
            sm: 'inherit'
          }
        }}>
        <Grid item xs={12} sm={6} padding={6}>
          <Grid container gap={2}
            sx={{
              justifyContent: {
                xs: 'center',
                sm: 'inherit'
              }
            }}>
            <Hidden mdDown>
              <KPLogoMin size={120} />
            </Hidden>
            <Hidden mdUp>
              <KPLogoMin size={72} />
            </Hidden>
            <Typography variant="h2">Покупайте в магазине через приложение Красная Поляна</Typography>
            <Hidden lgDown>
              <Typography variant="body1">Чтобы скачать приложение Красная Поляна, наведите камеру смартфона на QR-код или выберите свой магазин приложений</Typography>
            </Hidden>
            <Grid item>
              <Grid container gap={1.5}>
                <Hidden xsUp>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                  >
                    <Grid container gap={1} alignItems="center" >
                      <img src={qr_icon} width={32} height={32} alt="_"/>
                      <span>Показать QR-код</span>
                    </Grid>
                  </Button>
                </Hidden>
                <IconButton
                  size="large"
                  color="secondary"
                  href="https://apps.apple.com/us/app/%D0%BA%D1%83%D1%80%D0%BE%D1%80%D1%82-%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BE%D0%BB%D1%8F%D0%BD%D0%B0/id1601673705?roistat_visit=929450"
                  target="_blank"
                >
                  <AppleStoreIcon />
                </IconButton>
                <IconButton
                  size="large"
                  color="secondary"
                  href="https://play.google.com/store/apps/details?id=ru.krasnayapolyanaresort&roistat_visit=929450"
                  target="_blank"
                >
                  <GooglePlayIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ alignItems: { padding: '0 48 0 48', sm: 0 } }}>
          <CustomImg src={bg_banner_mobile} />
        </Grid>
      </Grid>
    </CustomCard>
  )
};

export default BannerMobile;