import client from './client';

// const schoolEndpoint = '/addSchoolRequest';

const getAllSchools = () => client.get(schoolEndpoint);
const getActiveSchoolDetails = (schoolId) =>
  client.get('/getActiveSchoolDetails' + '/' + schoolId);

const submitSchoolRequest = (schoolRequest) => {
  return client.post('/addSchoolRequest', schoolRequest);
};

export default {
  getAllSchools,
  getActiveSchoolDetails,
  submitSchoolRequest,
};
