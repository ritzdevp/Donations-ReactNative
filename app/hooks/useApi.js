import React from 'react';
// Reusable hook for get requests

export default useApi = (apiFunc) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});
  const [error, setError] = React.useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    if (!response.ok) {
      console.log(response.originalError);
      setError(true);
    }
    setData(response.data);
    setLoading(false);
    //console.log(response.data);
    return response.data;
  };

  return {data, error, loading, request};
};
