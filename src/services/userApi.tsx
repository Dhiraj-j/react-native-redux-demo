import {User} from '../type/User.types';
import axiosInstance from './apiService';

export const fetchRandomUsers = async (
  page: number = 1,
  resultsPerPage: number = 10,
): Promise<User[]> => {
  try {
    const response = await axiosInstance.get('', {
      params: {
        page,
        results: resultsPerPage,
      },
    });
    return response.data.results;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Failed to fetch users: ' + error.message);
    } else {
      console.error('An unexpected error occurred:', error);
      throw new Error('An unexpected error occurred while fetching users.');
    }
  }
};
