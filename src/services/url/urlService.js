const API = import.meta.env.VITE_API_URL;

export const shorten = async (data) => {
  return await fetch(`${API}/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: "include",
    body: JSON.stringify({ originalUrl: data }),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });
};

export const getUrls = async () => {
  return await fetch(`${API}/urls`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: "include",
  }).then((res) => res.json());
};

export const deleteUrls = async (ids) => {
  return await fetch(`${API}/deleteSelected`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: "include",
    body: JSON.stringify(ids),
  }).then((res) => res.json());
};

export const deleteUrl = async (id) => {
  return await fetch(`${API}/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: "include",
  }).then((res) => res.json());
};

export const getUrl = async (id) => {
  return await fetch(`${API}/url/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: "include",
  }).then((res) => res.json());
};

export const updateUrl = async (id, editData) => {
  return await fetch(`${API}/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: "include",
    body: JSON.stringify(editData),
  }).then((res) => res.json());
};
