import {
  Box, Button, Typography,
} from '@mui/material';
import Stack from '@mui/material/Stack/Stack';
import Img from 'components/layout/ui/img';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import * as Styled from './styled';
import ApiService from '../../../services/api-service';

type CarCardProps = Pick<CarModel, 'images' | 'name' | 'year' | 'id'>;

const CarCard: React.FC<CarCardProps> = ({
  id,
  images,
  name,
  year,
}) => {
  const navigate = useNavigate();
  React.useEffect(() => {
  });

  const handleDelete = () => {
    ApiService.deleteCarCard(id);
    window.location.reload();
  };

  return (
    <Stack sx={{ boxShadow: 3, position: 'relative' }}>
      <Styled.CarCardActions>
        <Button variant="contained" color="warning" size="small">update</Button>
        <Button onClick={handleDelete} variant="contained" color="error" size="small"><DeleteIcon /></Button>
      </Styled.CarCardActions>
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
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate(routes.CarPage.createLink(id))}
          >
            View details

          </Button>
          <Button>
            <FavoriteBorderIcon />
          </Button>
        </Styled.ButtonContainer>
      </Styled.ContentWrapper>
    </Stack>
  );
};

export default CarCard;
