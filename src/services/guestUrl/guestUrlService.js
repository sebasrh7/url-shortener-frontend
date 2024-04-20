const API = import.meta.env.VITE_API_URL;

export const guestShorten = (data) => {
  console.log(API);
  return fetch(`${API}/guest/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
