import axios from 'axios';

import { User, ProductsResponse } from './types';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const login = async (credentials: {
  username: string;
  password?: string;
}): Promise<User> => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const getProducts = async (limit = 12): Promise<ProductsResponse> => {
  const response = await api.get(`/products?limit=${limit}`);
  return response.data;
};

export default api;
