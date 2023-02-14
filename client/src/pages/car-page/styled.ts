import { Box, styled } from '@mui/material';

export const CarPageFlex = styled(Box)(({ theme }) => ({
  display: 'flex',
  boxShadow: '2',
  [theme.breakpoints.between('xs', 'md')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },
}));
