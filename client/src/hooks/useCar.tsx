import React from 'react';
import ApiService from '../../services/api-service';

const useHouse = (id: string | undefined) => {
  const [car, setCar] = React.useState<CarModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedCar = await ApiService.fetchCar(id);
        setCar(fetchedCar);
      })();
    }
  }, [id]);
  return car;
};

export default useHouse;
