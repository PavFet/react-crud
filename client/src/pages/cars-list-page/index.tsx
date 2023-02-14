import React from 'react';
import ApiService from '../../../services/api-service';
import CarCard from './car-card';
import * as Styled from './styled';

const CarListPage = () => {
  const [carsData, setCarsData] = React.useState<CarModel[]>([]);

  React.useEffect(() => {
    const fetchedCars = async () => {
      const result = await ApiService.fetchCars();
      setCarsData(result);
    };
    fetchedCars();
  }, []);

  return (
    <Styled.CarsListPageGrid>
      {carsData.map((car) => <CarCard images={[car.images[0]]} name={car.name} year={car.year} />)}
    </Styled.CarsListPageGrid>
  );
};

export default CarListPage;
