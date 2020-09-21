import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.0.108:9000/api',
});

// apiClient.get('/school').then((response) => {
//   if (!response.ok) {
//     response.problem;
//   }
// });

export default apiClient;
