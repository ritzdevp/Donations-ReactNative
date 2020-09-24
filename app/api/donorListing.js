import client from './client';

const donorEndpoint = '/donor';

//const getAllDonor = () => client.get(donorEndpoint);
const submitDonorRequest = (donorRequest) => {
  return client.post(donorEndpoint, donorRequest);
};
export default {
  submitDonorRequest,
};
