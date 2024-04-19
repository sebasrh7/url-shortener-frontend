// Initialize the user data from the local storage
export const initialState = {
  isAuthenticated: false,
  jwt: null,
  user: null,
};

// Create a reducer to update the user data
export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("jwt", action.payload.jwt);
      localStorage.setItem("user", action.payload.user);
      return {
        ...state,
        isAuthenticated: true,
        jwt: action.payload.jwt,
        user: JSON.parse(action.payload.user),
      };
    case "PROFILE":
      return {
        ...state,
        isAuthenticated: true,
        jwt: action.payload.jwt,
        user: JSON.parse(action.payload.user),
      };
    case "LOGOUT":
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        jwt: null,
        user: null,
      };
    default:
      return state;
  }
};
