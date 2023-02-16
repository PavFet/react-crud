import { Box, styled } from '@mui/material';

export const TechnicalCharacteristicsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2),
}));
