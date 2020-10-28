import client from './client';

const itemEndpoint = '/getAllListedItems';

const getAllListedItems = () => client.get(itemEndpoint);
const getSchoolsPerItemByID = (id) => client.get('/getSchoolsPerItemByID' + '/' + id);
const getTotalQuantityPerItem = () => client.get('/getTotalQuantityPerItem');

export default {
  getAllListedItems,
  getSchoolsPerItemByID,
  getTotalQuantityPerItem
};


