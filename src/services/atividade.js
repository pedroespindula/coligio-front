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

const fullRoute = (idDisciplina) => {
  return `${ROUTE}/${idDisciplina}/atividade`
}

export const getAll = (idDisciplina) => {
    return api.get(fullRoute(idDisciplina), { headers: { Authorization: `Bearer ${getToken()}` } });
};

export const get = (idDisciplina, id) => {
  return api.get(`${fullRoute(idDisciplina)}/${id}`, {}, { headers: { Authorization: `Bearer ${getToken()}` } });
};

export const post = (idDisciplina, data) => {
  return api.post(fullRoute(idDisciplina), data, { headers: { Authorization: `Bearer ${getToken()}` } });
};

export const put = (idDisciplina, id, body) => {
  const rota = `${fullRoute(idDisciplina)}/${id}`;

  return api.put(rota, body);
};

export const remove = (idDisciplina, id) => {
  const rota = `${fullRoute(idDisciplina)}/${id}`;

  return api.delete(rota);
};

export default { getAll, get, post, put, remove };
