import { z } from "zod";

export const registerSchema = z.object({
 username: z.string({
    required_error: "Nombre requerido",
  }),
  apellido_p: z.string({
      required_error: "Apellido Paterno requerido",
    }),
  apellido_m: z.string({
      required_error: "Apellido requerido",
    }),
  email: z.string({
      required_error: "Email requerido",
    })
    .email({
      message: "Email invalido",
    }),
  genero: z.string({
      required_error: "Genero is required",
  }),
  zona: z.string({
    required_error: "Area requerida",
  }),
  password: z.string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});