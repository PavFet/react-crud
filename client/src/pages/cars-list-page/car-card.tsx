import { Box, Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack/Stack';
import Img from 'components/layout/ui/img';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import * as Styled from './styled';

type CarCardProps = Pick<CarModel, 'images' | 'name' | 'year'>;

const CarCard: React.FC<CarCardProps> = ({
  images,
  name,
  year,
}) => (
  <Stack sx={{ boxShadow: 3 }}>
    <Img src={images[0]} alt={name} sx={{ aspectRatio: '1.42', width: 1 }} />
    <Styled.ContentWrapper>
      <Box sx={{ float: 'right', textAlign: 'right', flexGrow: 1 }}>
        <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.2rem', color: 'primary.main' }}>
          {name.toUpperCase()}
        </Typography>
        <Typography component="h3" sx={{ fontWeight: 500, fontSize: '1.1rem', color: 'grey.600' }}>
          {year}
        </Typography>
      </Box>
      <Styled.ButtonContainer>
        <Button color="primary" variant="contained">View details</Button>
        <Button><FavoriteBorderIcon /></Button>
      </Styled.ButtonContainer>
    </Styled.ContentWrapper>
  </Stack>
);

export default CarCard;
