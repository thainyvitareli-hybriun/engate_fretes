import axios from 'axios';

const RELEASE_BASE_URL = 'http://192.168.0.40:8088';
const DEBUG_BASE_URL = 'http://192.168.0.45:8088';

export const api = axios.create({
  timeout: 500,
  headers: {source: '0'},
  baseURL: __DEV__ ? DEBUG_BASE_URL : RELEASE_BASE_URL,
});
