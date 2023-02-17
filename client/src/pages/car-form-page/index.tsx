import {
  Button, Paper, Select, Stack, TextField, MenuItem, InputLabel,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import useCar from 'hooks/useCar';
import * as Styled from './styled';
import ImagesField from './images-field';
import ApiService from '../../../services/api-service';
import { btnColorMap, btnMap, titleMap } from './data';

type CarFormPageProps = {
  mode?: 'create' | 'update',
};

const CarFormPage: React.FC<CarFormPageProps> = ({
  mode = 'create',
}) => {
  const navigate = useNavigate();
  const formRef = React.useRef(null);
  const { id } = useParams();
  const car = useCar(id);
  console.log(car);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    const formData = new FormData(formRef.current);
    const values = {
      name: formData.get('title'),
      technical_characteristics: {
        miles_per_gallon: formData.get('miles-per-gallon'),
        cylinders: formData.get('cylinders'),
        displacement: formData.get('displacement'),
        horsepower: formData.get('horsepower'),
        weight_in_lbs: formData.get('weight'),
        acceleration: formData.get('acceleration'),
      },
      year: formData.get('year'),
      origin: formData.get('origin'),
      images: formData.getAll('images'),
    };
    if (mode === 'create') {
      ApiService.postNewCarCard(values as any);
      navigate(routes.CarListPage);
      console.log('Daromas sukurimas');
    }
    if (mode === 'update') {
      console.log('daromas upadatas id', id);
    }
  };

  if (mode === 'update' && car === undefined) return null;

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      ref={formRef}
      sx={{
        width: {
          sx: 300, md: 600, lg: 900, xl: 1200,
        },
      }}
    >
      <Typography variant="h4" sx={{ p: 2 }} textAlign="center">{titleMap[mode]}</Typography>
      <Stack sx={{ p: 3, display: 'flex' }}>
        <TextField defaultValue={car?.name} sx={{ width: 1 }} id="title" label="Name" variant="filled" name="title" required />
        <TextField defaultValue={car?.year} sx={{ width: 1, py: 2 }} id="year" label="Year" name="year" variant="filled" required type="number" InputProps={{ inputProps: { min: 1960, max: 1979 } }} />
        <InputLabel>Country of origin</InputLabel>
        <Select defaultValue={mode === 'update' ? car?.origin : ''} sx={{ width: 1 }} id="origin" name="origin" required>
          <MenuItem value="EU">EU</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value={undefined}>None</MenuItem>
        </Select>
        <Typography sx={{ mt: 2 }}>Technical characteristics</Typography>
        <Styled.TechnicalCharacteristicsGrid>
          <TextField defaultValue={car?.technical_characteristics.miles_per_gallon} id="miles-per-gallon" name="miles-per-gallon" label="Miles per gallon" variant="filled" required type="number" />
          <TextField defaultValue={car?.technical_characteristics.cylinders} id="cylinders" name="cylinders" label="Cylinders" variant="filled" required type="number" InputProps={{ inputProps: { min: 4, max: 12 } }} />
          <TextField defaultValue={car?.technical_characteristics.displacement} id="displacement" name="displacement" label="Displacement" variant="filled" required type="number" />
          <TextField defaultValue={car?.technical_characteristics.horsepower} id="horsepower" name="horsepower" label="Horsepower" variant="filled" required type="number" />
          <TextField defaultValue={car?.technical_characteristics.weight_in_lbs} id="weight" name="weight" label="Weight(lbs)" variant="filled" required type="number" />
          <TextField defaultValue={car?.technical_characteristics.acceleration} id="acceleration" name="acceleration" label="Acceleration(sec)" variant="filled" required type="number" />
        </Styled.TechnicalCharacteristicsGrid>
        <Typography sx={{ mt: 2 }}>Images</Typography>
        <ImagesField dafaultImages={car?.images} />
        <Button type="submit" color={btnColorMap[mode]} variant="contained" size="large" sx={{ m: 'auto' }}>
          {btnMap[mode]}
        </Button>
      </Stack>
    </Paper>
  );
};

export default CarFormPage;
