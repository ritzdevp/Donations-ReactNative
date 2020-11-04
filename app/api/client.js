import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'https://backendherokudonorapp.herokuapp.com/api',
  //IP1: 192.168.137.1
  //IP2: 192.168.0.108
  //http://192.168.43.145:8000/api
  //https://backendherokudonorapp.herokuapp.com/api
});

// apiClient.get('/school').then((response) => {
//   if (!response.ok) {
//     response.problem;
//   }
// });

export default apiClient;
