import { Box, Skeleton } from '@mui/material';

interface IGridSkeletonProps {
  rowsNumber: number;
}

/**
 * Renders a grid skeleton given the number of rows
 * @param rowsNumber number of rows
 * @returns {JSX Component}
 */
export const GridSkeleton = (props: IGridSkeletonProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        p: 0.5,
      }}
    >
      <Skeleton
        variant="rectangular"
        sx={{ height: (theme) => theme.spacing(5), mb: 1.5, borderRadius: 1 }}
      />
      <Box
        sx={{
          '> *:not(:last-child)': {
            marginBottom: 1,
          },
        }}
      >
        {[...Array(props.rowsNumber)].map((_,i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            sx={{ height: (theme) => theme.spacing(7.5), borderRadius: 1 }}
          />
        ))}
      </Box>
    </Box>
  );
};
