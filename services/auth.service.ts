import axios from "axios";

const API_URL = "https://cc-backend-fma6.onrender.com/api/v1/";

export const register = (name: string, email: string, password: string, status: number, access: number) => {
  return axios.post(API_URL + "register", {
    name,
    email,
    password,
    status,
    access,
  }).then((response) => {
    if (response.data.message) {
      console.log(response.data.message);
    }
    return response.data; // Returning the entire response for further use if needed
  });
};

export const login = (email: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.data[0].token) {
        localStorage.setItem("user", JSON.stringify(response.data.data[0]));
      }
      return response.data; // Returning the entire response for further use if needed
    })
    .catch((error) => {
      console.error("Login failed:", error.message);
      throw error; // Rethrow the error to handle it at the calling point
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return userStr;
};
