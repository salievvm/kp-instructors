/* eslint-disable */

import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid, IconButton } from '@mui/material';

import { TimesIcon } from '../../../assets/icons';

const TransitionUp = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TransitionRight = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function CustomAlertDialog({
  open,
  onClose,
  title,
  description,
  children,
  variant,
}) {
  const {
    TransitionComponent,
    PaperProps,
    textAlign,
  } = React.useMemo(() => {
    switch (variant) {
      case 'center':
        return {
          TransitionComponent: TransitionUp,
          PaperProps: {},
          textAlign: 'center',
        };
      case 'right':
        return {
          TransitionComponent: TransitionRight,
          PaperProps: {
            sx: (theme) => ({
              height: '90%',
              maxHeight: '90%',
              width: '400px',
              right: 0,
              top: 0,
              position: 'fixed',
              [theme.breakpoints.down('sm')]: {
                width: '85%'
              },
            }),
          },
          textAlign: 'inherit',
        }
    
      default:
        break;
    }
  }, [variant]);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={TransitionComponent}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={PaperProps}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={(theme) => ({
            textAlign: 'center',
          })}
        >
          {title ? (
            <Grid item>
              <DialogTitle variant="h3">{title}</DialogTitle>
            </Grid>
          ) : null}
          <Grid item>
            <IconButton
              onClick={onClose}
            >
              <TimesIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={(theme) => ({
            // bgcolor: theme.palette.info.main,
            // borderRadius: theme.shape.borderRadiusSm,
            textAlign: textAlign,
            overflowY: 'auto',
            overflowX: 'hidden',
            height: '100%',
          })}
        >
          <DialogContent>
            {description ? (
              <DialogContentText id="alert-dialog-slide-description">
                {description}
              </DialogContentText>) : null}
            {children}
          </DialogContent>
          <DialogActions
            disableSpacing
            sx={(theme) => ({
              paddingTop: 0,
              paddingBottom: 3,
            })}
          >
            {/* <Button
              size='large'
              variant='contained'
              onClick={onClose}>
              Закрыть
            </Button> */}
            {/* <Button variant="contained" onClick={handleSuccess}>Agree</Button> */}
          </DialogActions>
        </Grid>
      </Dialog>
    </div>
  );
}

CustomAlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any,
  variant: PropTypes.oneOf(['center', 'right']),
};

CustomAlertDialog.defaultProps = {
  title: '',
  description: '',
  children: <></>,
  variant: 'center',
};