import client from './client';

// const schoolEndpoint = '/addSchoolRequest';

const getAllActiveSchools = () => client.get('/getAllActiveSchools');
const getActiveSchoolDetails = (schoolId) =>
  client.get('/getActiveSchoolDetails' + '/' + schoolId);


const submitSchoolRequest = (schoolRequest) => {
  return client.post('/addSchoolRequest', schoolRequest);
};

export default {
  getAllActiveSchools,
  getActiveSchoolDetails,
  submitSchoolRequest,
};
