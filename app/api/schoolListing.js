import client from './client';

const schoolEndpoint = '/school';

const getAllSchools = () => client.get(schoolEndpoint);
const getSchoolDetails = (schoolId) =>
  client.get(schoolEndpoint + '/' + schoolId);

const submitSchoolRequest = (schoolRequest) => {
  return client.post(schoolEndpoint, schoolRequest);
};

export default {
  getAllSchools,
  getSchoolDetails,
  submitSchoolRequest,
};
