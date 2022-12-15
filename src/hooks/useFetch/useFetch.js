import axios from 'axios';
import {useEffect, useState} from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      console.log(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {error, loading, data};
}

export default useFetch;
