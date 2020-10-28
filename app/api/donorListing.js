import client from './client';

const donorEndpoint = '/addDonorRequest';

//const getAllDonor = () => client.get(donorEndpoint);
const submitDonorRequest = (donorRequest) => {
  return client.post(donorEndpoint, donorRequest);
};
export default {
  submitDonorRequest,
};
