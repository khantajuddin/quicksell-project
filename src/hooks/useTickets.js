// useTickets.js
import useSWR from 'swr';
import { fetcher } from '../utils';

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const useTickets = () => {
  const { data, error, isLoading } = useSWR(API_URL, fetcher);
  return { data, error, isLoading };
};