import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.137.1:8000/api',
  //IP1: 192.168.137.1
  //IP2: 192.168.0.108
});

// apiClient.get('/school').then((response) => {
//   if (!response.ok) {
//     response.problem;
//   }
// });

export default apiClient;
