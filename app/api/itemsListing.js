import client from './client';

const itemEndpoint = '/getAllListedItems';

const getAllListedItems = () => client.get(itemEndpoint);
//const getSchoolsPerItem = (itemId) => client.get(itemEndpoint + '/' + itemId);
const getTotalQuantityPerItem = (id) => client.get('/getTotalQuantityPerItem');

export default {
  getAllListedItems,
  //getSchoolsPerItem,
  getTotalQuantityPerItem
};


