import {
  Box, IconButton, Paper, TextField,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import * as Styled from './styled';
import TextFieldImages from './text-field-images';

type CarFormPageProps = {
  mode?: 'create' | 'edit',
};

const CarFormPage: React.FC<CarFormPageProps> = () => (
  <Paper
    component="form"
    sx={{
      width: {
        sx: 300, md: 600, lg: 900, xl: 1200,
      },
    }}
  >
    <Typography variant="h4" sx={{ p: 2 }} textAlign="center">Create car card</Typography>
    <Box sx={{ p: 3 }}>
      <TextField sx={{ width: 1 }} id="title" label="Title" variant="filled" required />
      <TextField sx={{ width: 1, py: 2 }} id="year" label="Year" variant="filled" required type="number" InputProps={{ inputProps: { min: 1960, max: 1979 } }} />
      <TextField sx={{ width: 1 }} id="origin" label="Country of origin" variant="filled" required />
      <Typography sx={{ mt: 2 }}>Technical characteristics</Typography>
      <Styled.TechnicalCharacteristicsGrid>
        <TextField id="miles-per-gallon" label="Miles per gallon" variant="filled" required type="number" />
        <TextField id="cylinders" label="Cylinders" variant="filled" required type="number" InputProps={{ inputProps: { min: 4, max: 12 } }} />
        <TextField id="displacement" label="Displacement" variant="filled" required type="number" />
        <TextField id="horsepower" label="Horsepower" variant="filled" required type="number" />
        <TextField id="weight" label="Weight(lbs)" variant="filled" required type="number" />
        <TextField id="acceleration" label="Acceleration(sec)" variant="filled" required type="number" />
      </Styled.TechnicalCharacteristicsGrid>
      <Typography sx={{ mt: 2 }}>Images</Typography>
      <TextFieldImages />
      <IconButton color="success">
        <AddCircleOutlineIcon />
      </IconButton>
    </Box>
  </Paper>
);

export default CarFormPage;
