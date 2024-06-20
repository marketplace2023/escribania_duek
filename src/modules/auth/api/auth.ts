import axios from "@/modules/shared/components/axios";
import {
  LoginFormSchema,
  RegisterFormSchema,
} from "../zod-schemas/auth-schemas";

type RegisterData = RegisterFormSchema & { id: string };

export async function register(data: RegisterData) {
  await axios.post("/v1/auth/register", data);
}

export async function login(data: LoginFormSchema) {
  await axios.post("/v1/auth/login", data);
}
