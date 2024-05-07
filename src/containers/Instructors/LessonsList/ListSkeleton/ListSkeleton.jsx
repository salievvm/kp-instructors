import { Skeleton } from "@mui/material";

export const ListSkeleton = () => {
  return (
    <>
      <Skeleton height={72} variant="rectangular" />
      <Skeleton height={72} variant="rectangular" />
      <Skeleton height={72} variant="rectangular" />
    </>
  );
};
