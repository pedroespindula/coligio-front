import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL
const ROUTE = "/usuario"

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const getAll = queryParams => {
  return api.get(ROUTE, { params: queryParams });
};

export const get = (id, queryParams) => {
  return api.get(`${ROUTE}/${id}`, { params: queryParams });
};

export const post = body => {
  return api.post(ROUTE, body);
};

export const put = (id, body) => {
  const rota = `${ROUTE}/${id}`;

  return api.put(rota, body);
};

export const remove = (id) => {
  const rota = `${ROUTE}/${id}`;

  return api.delete(rota);
};

export const login = (body) => {
  const rota = `${ROUTE}/login`;

  return api.post(rota, body);
}

export default { getAll, get, post, put, remove };
