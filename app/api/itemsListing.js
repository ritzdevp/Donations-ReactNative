import client from './client';

const itemEndpoint = '/getAllListedItems';

const getAllListedItems = () => client.get(itemEndpoint);
//const getSchoolsPerItem = (itemId) => client.get(itemEndpoint + '/' + itemId);

export default {
  getAllListedItems,
  //getSchoolsPerItem,
};
