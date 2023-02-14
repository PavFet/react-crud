import { Box, Stack, styled } from '@mui/material';

export const CarsListPageGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  maxWidth: theme.breakpoints.values.xl,
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(1, 2),
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
  '&>*': {
    flexGrow: 1,
  },
}));
