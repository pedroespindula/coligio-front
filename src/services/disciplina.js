import axios from "axios";

import { getToken } from './auth';

const BASE_URL = process.env.REACT_APP_API_URL
const ROUTE = "/disciplina"

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const getAll = () => {
    return api.get(ROUTE, {}, { headers: { Authorization: `Bearer ${getToken()}` } });
};

export const get = (id) => {
  return api.get(`${ROUTE}/${id}`, {}, { headers: { Authorization: `Bearer ${getToken()}` } });
};

export const post = (data) => {
  return api.post(ROUTE, data, { headers: { Authorization: `Bearer ${getToken()}` } });
};

export const put = (id, body) => {
  const rota = `${ROUTE}/${id}`;

  return api.put(rota, body);
};

export const remove = (id) => {
  const rota = `${ROUTE}/${id}`;

  return api.delete(rota);
};

export const matricular = (id) => {
  const rota = `${ROUTE}/${id}/matricula`;

  return api.post(rota, {}, { headers: { Authorization: `Bearer ${getToken()}` } });
};

export default { getAll, get, post, put, remove };
