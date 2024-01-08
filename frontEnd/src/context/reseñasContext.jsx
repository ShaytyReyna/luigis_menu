import { createContext, useContext, useState } from "react";
import {
  createReseñasRequest,
  deleteReseñaRequest,
  getReseñasRequest,
  getReseñaRequest,
  updateReseñaRequest,
} from "../api/Reseñas";

const ReseñasContext = createContext();

export const useReseñas = () => {
  const context = useContext(ReseñasContext);
  if (!context) throw new Error("useReseñas must be used within a ReseñasProvider");
  return context;
};

export function ReseñasProvider({ children }) {
  const [Reseñas, setReseñas] = useState([]);

  const getReseñas = async () => {
    const res = await getReseñasRequest();
    setReseñas(res.data);
  };

  const deleteReseña = async (id) => {
    try {
      const res = await deleteReseñaRequest(id);
      if (res.status === 204) setReseñas(Reseñas.filter((Reseñas) => Reseñas._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createReseñas = async (Reseñas) => {
    try {
      const res = await createReseñasRequest(Reseñas);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getReseña = async (id) => {
    try {
      const res = await getReseñaRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateReseña = async (id, Reseñas) => {
    try {
      await updateReseñaRequest(id, Reseñas);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        Reseñas,
        getReseñas,
        deleteReseña,
        createReseñas,
        getReseña,
        updateReseña,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}