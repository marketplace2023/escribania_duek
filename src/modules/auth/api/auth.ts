import axios from "@/modules/shared/components/axios";
import { RegisterFormSchema } from "../zod-schemas/auth-schemas";

export async function register(data: RegisterFormSchema) {
  await axios.post("/v1/auth/register", data);
}
