import axios from 'axios';
import queryString from 'query-string';
import { BloodRequestInterface, BloodRequestGetQueryInterface } from 'interfaces/blood-request';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBloodRequests = async (
  query?: BloodRequestGetQueryInterface,
): Promise<PaginatedInterface<BloodRequestInterface>> => {
  const response = await axios.get('/api/blood-requests', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBloodRequest = async (bloodRequest: BloodRequestInterface) => {
  const response = await axios.post('/api/blood-requests', bloodRequest);
  return response.data;
};

export const updateBloodRequestById = async (id: string, bloodRequest: BloodRequestInterface) => {
  const response = await axios.put(`/api/blood-requests/${id}`, bloodRequest);
  return response.data;
};

export const getBloodRequestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/blood-requests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBloodRequestById = async (id: string) => {
  const response = await axios.delete(`/api/blood-requests/${id}`);
  return response.data;
};
