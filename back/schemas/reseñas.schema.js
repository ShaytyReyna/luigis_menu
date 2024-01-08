import { z } from "zod";

export const createReseñasSchema = z.object({
  resña: z.string().datetime().optional(),
});