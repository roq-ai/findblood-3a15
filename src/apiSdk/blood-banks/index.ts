import axios from 'axios';
import queryString from 'query-string';
import { BloodBankInterface, BloodBankGetQueryInterface } from 'interfaces/blood-bank';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBloodBanks = async (
  query?: BloodBankGetQueryInterface,
): Promise<PaginatedInterface<BloodBankInterface>> => {
  const response = await axios.get('/api/blood-banks', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBloodBank = async (bloodBank: BloodBankInterface) => {
  const response = await axios.post('/api/blood-banks', bloodBank);
  return response.data;
};

export const updateBloodBankById = async (id: string, bloodBank: BloodBankInterface) => {
  const response = await axios.put(`/api/blood-banks/${id}`, bloodBank);
  return response.data;
};

export const getBloodBankById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/blood-banks/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBloodBankById = async (id: string) => {
  const response = await axios.delete(`/api/blood-banks/${id}`);
  return response.data;
};
