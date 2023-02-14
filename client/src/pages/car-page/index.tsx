import { Box } from '@mui/material';
import routes from 'navigation/routes';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ApiService from '../../../services/api-service';
import CarPageContent from './car-page-content';
import CarPageSwiper from './car-page-swiper';
import * as Styled from './styled';

const CarPage = () => {
  const { id } = useParams();
  const [car, setCar] = React.useState<CarModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedCar = await ApiService.fetchCar(id);
        setCar(fetchedCar);
      })();
    }
  }, [id]);

  if (id === undefined) {
    return <Navigate to={routes.HomePage} />;
  }
  return (
    <Styled.CarPageFlex>
      <Box>
        {
        car && <CarPageSwiper images={car.images} />
      }
      </Box>
      <Box>
        {
        car && (
        <CarPageContent
          technical_characteristics={car.technical_characteristics}
          name={car.name.toUpperCase()}
          year={car.year}
          origin={car.origin}
        />
        )
      }
      </Box>
    </Styled.CarPageFlex>
  );
};

export default CarPage;
