import { z } from "zod";

export const registerFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "El nombre es requerido")
    .max(50, "El máximo de caracteres es 50"),
  lastName: z
    .string()
    .min(1, "El apellido es requerido")
    .max(50, "El máximo de caracteres es 50"),
  email: z.string().email("Ingrese un email válido"),
  password: z.string().min(8, "La contraseña debe tener mínimo 8 caracteres"),
  acceptTermsOfService: z
    .boolean({ message: "Debe aceptar los términos y condiciones" })
    .refine((val) => val, {
      message: "Debe aceptar los términos y condiciones",
    }),
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().email("Ingrese un email válido"),
  password: z.string().min(8, "La contraseña debe tener mínimo 8 caracteres"),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
