import { z } from "zod";

export const loginFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "El nombre es requerido")
    .max(50, "El máximo de caracteres es 50"),
  lastName: z
    .string()
    .min(1, "El apellido es requerido")
    .max(50, "El máximo de caracteres es 50"),
  email: z.string().email("Ingrese un email válido"),
  password: z.string().min(8, "La contraseña debe tener mínimo 10 caracteres"),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
