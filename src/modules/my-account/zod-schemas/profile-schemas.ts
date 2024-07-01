import { z } from "zod";

export const profileFormSchema = z.object({
  firstName: z.string().min(1, "Ingrese el nombre"),
  lastName: z.string().min(1, "Ingrese el apellido"),
  phoneNumber: z.string().min(7, "Ingrese el teléfono").optional().default(""),
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;
