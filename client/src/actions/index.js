import axios from 'axios';
import FETCH_USER from './types';

export const fetchUser = () => {
  axios.get('/api/current_user');
}
