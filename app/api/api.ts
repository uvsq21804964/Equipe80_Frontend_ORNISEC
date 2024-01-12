import axios from 'axios';

const apiUrl = 'http://localhost:8080/';

const APIClient = axios.create({
  withCredentials: true,
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  // Accept: '/',
  // 'Cache-Control': 'no-cache',
  // 'Cross-Origin-Resource-Policy': 'same-origin', // Optionnel, pour certains navigateurs
  // // 'Sec-Fetch-Site': 'cross-site', // Optionnel, pour certains navigateurs
  // Cookie: `access-token=${cookies.get('access_token')}`,
});

export default APIClient;
