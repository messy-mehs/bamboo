import { useState, useEffect } from "react";

// Custom hook
const useFetchData = (apiFunction) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFunction();
        setData(response.data); // Update state with fetched data
      } catch (err) {
        setError(err.message); // Capture error
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchData();
  }, [apiFunction]);

  return { data, loading, error };
};

export default useFetchData;
