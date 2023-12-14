import React from "react";

import { Hidden, Button, IconButton, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

import subscription_images from '../../../assets/img/subscription_images.png';

import CustomCard from "../../../components/@ui/CustomCard";
import { CustomTextField } from "../../../components/@ui/CustomFields";

import { SECTION_TYPES, FIELD_TYPES } from "../../../consts";
import { BORDER_RADIUS_MD } from "../../../theme/const";
const {
  email,
} = FIELD_TYPES;

const CustomImg = styled('img')(({ theme }) => ({
  position: 'absolute',
  maxHeight: '100%',
  maxHeight: '100%',
  height: '100%',
  left: 0,
  objectFit: 'cover',
  // maxWidth: '100%',
  // maxWidth: 'calc(100% - 48px)',
  [theme.breakpoints.down('xl')]: {
    left: '-185px',
  },
  [theme.breakpoints.down('lg')]: {
    left: '-400px',
  },
  [theme.breakpoints.down('md')]: {
    height: '166px',
    width: '511.45px',
    left: 'calc(50% - 255.725px)',
  },
  // [theme.breakpoints.down('sm')]: {
  //   maxHeight: 162,
  //   maxWidth: 'calc(100% - 96px)',
  // }
}));

const CustomDiv = styled('div')(({ theme }) => ({
  borderRadius: BORDER_RADIUS_MD,
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '166px',
    overflow: 'hidden',
    position: 'relative',
  },
}));

const BannerSubscription = () => {
  const textFieldTheme = SECTION_TYPES.filled;

  return (
    <CustomCard
      variant="filled"
      padding={0}
    >
      <Grid container
        // alignItems="flex-end"
        sx={{
          textAlign: {
            xs: 'center',
            sm: 'center',
            md: 'inherit',
          },
        }}>
        <Grid item xl={6} lg={5} md={4} xs={12} sx={{
        }}>
          <CustomDiv>
            <CustomImg src={subscription_images} />
          </CustomDiv>
        </Grid>
        <Grid item xl={5} lg={7} md={8} xs={12} padding={3}>
          <Grid container gap={2}
            sx={{
              justifyContent: {
                sm: 'center',
                md: 'inherit'
              }
            }}>
            <Typography variant="h5" maxWidth='600px'>1 раз в неделю отправляем письма с новыми услугами и товарами</Typography>
            <Grid container spacing={2}>
              <Grid item md={4} sm={6} xs={12}>
                <CustomTextField
                  // required
                  label="Имя"
                  // value={value}
                  // onChange={onChange}
                  theme={textFieldTheme}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <CustomTextField
                  // required
                  label="E-mail"
                  // value={value}
                  // onChange={onChange}
                  theme={textFieldTheme}
                  type={email}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Подписаться
                </Button>
              </Grid>
            </Grid>
            <Typography variant="caption">Нажимая на кнопку «Подписаться на рассылку», вы принимаете
              «Соглашение об обработке персональных данных»</Typography>
          </Grid>
        </Grid>
      </Grid>
    </CustomCard >
  )
};

export default BannerSubscription;