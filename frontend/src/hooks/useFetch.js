import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

export const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { profile } = useSelector((state) => state.user);

  async function getUnitDocuments(url) {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${profile.token}`,
          "Content-Type": "multipart/form-data", // Make sure to set Content-Type
        },
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return { getUnitDocuments, data, loading };
};
