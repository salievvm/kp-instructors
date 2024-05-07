import PropTypes from 'prop-types';

import { createContext, useContext, useMemo } from "react";
import { DEVICE_TYPES } from "../consts";
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

const {
  desktop,
  tablet,
  mobile
} = DEVICE_TYPES;

const DeviceTypeContext = createContext(desktop);

export const DeviceTypeProvider = ({ children }) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  const deviceType = useMemo(() => {
    if (isDesktop) return desktop;
    if (isTablet) return tablet;
  
    return mobile;
  }, [isDesktop, isTablet]);

  return (
    <DeviceTypeContext.Provider value={deviceType}>
      {children}
    </DeviceTypeContext.Provider>
  )
}

export const useDeviceType = () => {
  const ctx = useContext(DeviceTypeContext);

  if (!ctx) {
    throw new Error('<DeviceTypeProvider /> not found')
  }

  return ctx
}

DeviceTypeProvider.propTypes = {
  children: PropTypes.element,
  deviceType: PropTypes.oneOf(Object.values(DEVICE_TYPES))
};
