import http from "../http-common";
import authHeader from "./auth-header";

export const getPublicContent = () => {
  return http.get(`all`);
};

export const getUserBoard = () => {
  return http.get(`user`, { headers: authHeader() });
};

export const getModeratorBoard = () => {
  return http.get(`mod`, { headers: authHeader() });
};

export const getAdminBoard = () => {
  return http.get(`admin`, { headers: authHeader() });
};
