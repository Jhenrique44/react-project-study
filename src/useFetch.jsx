import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function request(url, options) {
    let res;
    let json;
    try {
      setError(null);
      setLoading(true);
      res = await fetch(url, options);
      json = await res.json();
      setData(json);
      setLoading(false);
    } catch (erro) {
      json = null;
      setError(erro);
    } finally {
      setData(json);
      setLoading(false);
    }
  }

  return { data, error, loading, request };
};

export default useFetch;
