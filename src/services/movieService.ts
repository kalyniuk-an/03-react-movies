import axios from "axios";
import type { Movie } from '../types/movie';

interface movieHttpResponse {
  results: Movie[];
}
const URL = '';
// const token = '';
export const fetchMovie = async (query: string): Promise<Movie[]> => { 
  const response = await axios.get<movieHttpResponse>(URL, {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer tooken`,
    }
  });
  return response.data.results;
};