import client from './client';

// const schoolEndpoint = '/addSchoolRequest';

const getAllSchools = () => client.get(schoolEndpoint);
const getSchoolDetails = (schoolId) =>
  client.get(schoolEndpoint + '/' + schoolId);

const submitSchoolRequest = (schoolRequest) => {
  return client.post('/addSchoolRequest', schoolRequest);
};

export default {
  getAllSchools,
  getSchoolDetails,
  submitSchoolRequest,
};
