import React from 'react';
import ApiService from '../../../services/api-service';
import CarCard from './car-card';
import CreateCarCard from './create-car-card';
import * as Styled from './styled';

const CarListPage = () => {
  const [carsData, setCarsData] = React.useState<CarModel[]>([]);

  const onDelete = async (id: string | undefined) => {
    await ApiService.deleteCarCard(id);
    const fetchedCars = await ApiService.fetchCars();
    setCarsData(fetchedCars);
  };

  React.useEffect(() => {
    const fetchedCars = async () => {
      const result = await ApiService.fetchCars();
      setCarsData(result);
    };
    fetchedCars();
  }, []);

  return (
    <>
      <CreateCarCard />
      <Styled.CarsListPageGrid>
        {carsData.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            images={[car.images[0]]}
            name={car.name}
            year={car.year}
            onDelete={() => onDelete(car.id)}
          />
        ))}
      </Styled.CarsListPageGrid>
    </>
  );
};

export default CarListPage;
