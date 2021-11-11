import http from "../http-common";

export const register = (username, email, password) => {
  return http.post(`signup`, { username, email, password });
};

export const login = (username, password) => {
  return http.post(`signin`, { username, password }).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};

export const logout = () => {
  localStorage.removeItem("user");
};
