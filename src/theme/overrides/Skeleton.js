import { BORDER_RADIUS_MD } from "../const";

export default function Skeleton(theme) {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          borderRadius: BORDER_RADIUS_MD,
          // boxShadow: 'none',
        },
      },
    },
  };
}
