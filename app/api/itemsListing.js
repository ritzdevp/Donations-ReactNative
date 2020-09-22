import client from './client';

const itemEndpoint = '/items';

const getAllItem = () => client.get(itemEndpoint);
const getSchoolsPerItem = (itemId) => client.get(itemEndpoint + '/' + itemId);

export default {
  getAllItem,
  getSchoolsPerItem,
};
