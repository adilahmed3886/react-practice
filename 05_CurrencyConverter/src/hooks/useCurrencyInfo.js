import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch(`https://v6.exchangerate-api.com/v6/4f3f5b285dfd02ece029355e/latest/${currency}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch currency data');
        }
        return res.json();
      })
      .then((res) => {
        // Check if the response contains the expected data
        if (res.conversion_rates) {
          setData(res.conversion_rates);
        } else {
          throw new Error('Invalid API response');
        }
      })
      .catch((err) => {
        setError(err.message); // Handle error
      });
  }, [currency]); // Re-run whenever `currency` changes

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      console.log('Updated data:', data);
    }
  }, [data]); // Log data changes

  if (error) {
    console.error('Error fetching currency data:', error);
  }

  return data;
}

export default useCurrencyInfo;
