import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5009',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchCars = async () => {
  const { data: carsData } = await api.get<CarModel[]>('/cars');
  return carsData;
};

const fetchCar = async (id: string | number) => {
  const { data: carData } = await api.get<CarModel>(`/cars/${id}`);
  return carData;
};

const ApiService = {
  fetchCars,
  fetchCar,
};

export default ApiService;
