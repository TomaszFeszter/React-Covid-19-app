import { useState } from "react";
export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (path) => {
    try {
      setLoading(true);
      const res = await fetch(path);

      const jsonData = await res.json();

      if (jsonData && jsonData.status === "error") throw jsonData;
      setData(jsonData);
      setError(null);
      return jsonData;
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return {
    error,
    loading,
    data,
    setData,
    getData,
  };
};
