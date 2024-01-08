import axios from "./axios";

export const getReseñasRequest = async () => axios.get("/Reseñas");

export const createReseñasRequest = async (reseñas) => await axios.post("/Reseñas", reseñas);

export const updateReseñaRequest = async (reseñas) =>
  axios.put(`/Reseñas/${reseñas._id}`, reseñas);

export const deleteReseñaRequest = async (id) => axios.delete(`/Reseñas/${id}`);

export const getReseñaRequest = async (id) => axios.get(`/Reseñas/${id}`);