import { Box, Typography } from '@mui/material';
import React from 'react';

type CarPageContentProps = Omit<CarModel, 'id' | 'images' >;

const CarPageContent: React.FC<CarPageContentProps> = ({
  technical_characteristics: techChar,
  name,
  year,
  origin,
}) => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'grey.300', height: 1, padding: '10px',
  }}
  >
    <Box sx={{ color: 'primary.main', display: 'flex', justifyContent: 'end' }}>
      <Typography>{name}</Typography>
    </Box>
    <Box sx={{
      display: 'flex', justifyContent: 'end', color: 'primary.main',
    }}
    >
      <Typography sx={{ fontSize: '20px' }}>{year}</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'end', color: 'primary.main' }}>
      <Typography>{origin}</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography>
        Acceleration:
      </Typography>
      <Typography>
        {techChar.acceleration}
        s
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography>
        Cylinders:
      </Typography>
      <Typography>
        {techChar.cylinders}
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography>
        Horsepower:
      </Typography>
      <Typography>
        {techChar.horsepower}
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography>
        Weight:
      </Typography>
      <Typography>
        {techChar.weight_in_lbs}
        lbs
      </Typography>
    </Box>
  </Box>
);

export default CarPageContent;
