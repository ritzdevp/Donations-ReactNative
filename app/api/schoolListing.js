import client from './client';

const schoolEndpoint = '/school';
const itemsEndpoint = '/items';

const getAllSchools = () => client.get(schoolEndpoint);
const getSchoolDetails = (schoolId) =>
  client.get(schoolEndpoint + '/' + schoolId);

export default {
  getAllSchools,
  getSchoolDetails,
};
