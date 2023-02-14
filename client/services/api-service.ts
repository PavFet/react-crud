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

const ApiService = {
  fetchCars,
};

export default ApiService;
