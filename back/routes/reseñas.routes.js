import { Router } from "express";
import {createReseñas, deleteReseña, getReseña, getReseñas, updateReseña,} from "../controllers/reseñas.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createReseñasSchema } from "../schemas/reseñas.schema.js";

const router = Router();

router.get("/Reseñas", auth, getReseña);
router.post("/Reseñas", auth, validateSchema(createReseñasSchema), createReseñas);
router.get("/Reseñas/:id", auth, getReseñas);
router.put("/Reseñas/:id", auth, updateReseña);
router.delete("/Reseñas/:id", auth, deleteReseña);

export default router;