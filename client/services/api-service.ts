import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5009',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const requestSettings = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const fetchCars = async () => {
  const { data: carsData } = await api.get<CarModel[]>('/cars');
  return carsData;
};

const fetchCar = async (id: string | number) => {
  const { data: carData } = await api.get<CarModel>(`/cars/${id}`);
  return carData;
};

const postNewCarCard = async (carCard: CarModel) => {
  try {
    const response = await fetch('http://localhost:5009/cars', {
      ...requestSettings,
      method: 'POST',
      body: JSON.stringify(carCard),
    });

    if (response.status === 404) {
      throw new Error('Failed to Create new CarCard');
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

const deleteCarCard = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:5009/cars/${id}`, {
      ...requestSettings,
      method: 'DELETE',
    });
    if (response.status === 404) {
      throw new Error('Failed to Delete  CarCard');
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

const ApiService = {
  fetchCars,
  fetchCar,
  postNewCarCard,
  deleteCarCard,
};

export default ApiService;
