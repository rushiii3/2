import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (endpoints, query) => {
  const [Data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [errorT, seterror] = useState(null);
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoints}`,
    params: {
      ...query
  },
    headers: {
      'X-RapidAPI-Key': '0aa3991ebcmsh164cefaef1f2fcdp1b7b27jsn5f72e3adb99d',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  const fetchData = async () => {
    setisLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setisLoading(false);
    } catch (error) {
      seterror(error);
      alert("There is an error");
      console.log(error.message);
      console.error(error);
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    setisLoading(true);
    fetchData();
  };
  return { Data, isLoading, errorT, refetch };
};

export default useFetch;