const API = import.meta.env.VITE_API_URL;

export const guestShorten = (data) => {
  return fetch(`${API}/guest/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": `${API}`,
    },
    withCredentials: true,
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
