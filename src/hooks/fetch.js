import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) {
      setError(null);
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setData(json);
        })
        .catch(error_ => {
          setError(error_);
        });
    }
  }, [url]);
  return { data, error };
}
