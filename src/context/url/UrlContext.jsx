import {
  getUrls,
  shorten,
  deleteUrl,
  deleteUrls,
  getUrl,
  updateUrl,
} from "@/services/url/urlService";
import { createContext, useEffect, useState } from "react";

// Create a context to store the Url
export const UrlContext = createContext();

// Create a provider to wrap the app and provide the Url
export const UrlProvider = ({ children }) => {
  const [url, setUrl] = useState(null);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mapData = (data) => {
    return data.map((url) => {
      return {
        id: url._id,
        originalUrl: url.originalUrl,
        shortUrl: url.shortUrlId,
        clicks: url.clicks,
        date: url.date,
      };
    });
  };

  useEffect(() => {
    const fetchUrls = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getUrls();
        setRows(mapData(data));
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchUrls();
  }, []);

  const createShortUrl = async (originalUrl) => {
    setLoading(true);
    setError(null);

    try {
      const data = await shorten(originalUrl);
      setUrl(data);

      if (
        data.message != "URL already exists" ||
        data.message != "Invalid URL"
      ) {
        setRows([...rows, mapData(data)]);
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const removeUrls = async (ids) => {
    setLoading(true);
    setError(null);

    try {
      await deleteUrls(ids);
      setRows(rows.filter((row) => !ids.includes(row.id)));
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const removeUrl = async (id) => {
    setLoading(true);
    setError(null);

    try {
      await deleteUrl(id);
      setRows(rows.filter((row) => row.id !== id));
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const fetchUrl = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getUrl(id);
      setUrl(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const editUrl = async (id, editData) => {
    setLoading(true);
    setError(null);

    try {
      const data = await updateUrl(id, editData);
      setUrl(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <UrlContext.Provider
      value={{
        url,
        rows,
        loading,
        error,
        setRows,
        createShortUrl,
        removeUrl,
        removeUrls,
        fetchUrl,
        editUrl,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
};
