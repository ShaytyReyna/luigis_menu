import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const registerSchema = z
  .object({
    username: z.string({
        required_error: "Username is required",
      })
      .min(3, {
        message: "Username must be at least 3 characters",
      }),
      apellido_p: z.string({
        required_error: "Apellido is required",
      }),
      apellido_m: z.string({
        required_error: "Apellido is required",
      }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    genero: z.string({
      required_error: "genero is required",
    }),
    zona: z.string({
      required_error: "zona is required",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });