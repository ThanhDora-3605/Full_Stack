import { axiosInstance } from "./axios.js";

const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");
  return accessToken;
};
const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("refresh_token");
  return refreshToken;
};
const removeToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
const saveToken = (token) => {
  localStorage.setItem("access_token", token.access_token);
  localStorage.setItem("refresh_token", token.refresh_token);
};
const logout = () => {
  removeToken();
  window.location.href = "ex01.html";
};

const getProfile = async () => {
  const accessToken = getAccessToken();
  //Call api
  try {
    const response = await axiosInstance.get(`/auth/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

getProfile();

//post(url, body, config)
