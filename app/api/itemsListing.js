import client from './client';

const itemEndpoint = '/getAllListedItems';

const getAllItem = () => client.get(itemEndpoint);
//const getSchoolsPerItem = (itemId) => client.get(itemEndpoint + '/' + itemId);

export default {
  getAllItem,
  //getSchoolsPerItem,
};
