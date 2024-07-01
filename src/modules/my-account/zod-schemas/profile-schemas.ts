import { z } from "zod";

export const profileFormSchema = z.object({
  firstName: z.string().min(1, "Ingrese el nombre"),
  lastName: z.string().min(1, "Ingrese el apellido"),
  phoneNumber: z.string().min(7, "Ingrese el teléfono").optional().default(""),
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;

export const profilePasswordSchema = z
  .object({
    password: z.string().min(8, "La contraseña debe tener mínimo 8 caracteres"),
    newPassword: z
      .string()
      .min(8, "La nueva contraseña debe tener mínimo 8 caracteres"),
    newPasswordConfirmation: z.string(),
  })
  .refine((values) => values.newPassword === values.newPasswordConfirmation, {
    message: "Las contraseñas deben coincidir",
    path: ["newPasswordConfirmation"],
  });

export type ProfilePasswordSchema = z.infer<typeof profilePasswordSchema>;
