import axios from "@/modules/shared/components/axios";
import {
  LoginFormSchema,
  RegisterFormSchema,
} from "../zod-schemas/auth-schemas";
import { AuthInfo } from "../dtos/auth-info";

type RegisterData = RegisterFormSchema & { id: string };

export async function register(data: RegisterData): Promise<void> {
  await axios.post("/v1/auth/register", data);
}

export async function login(data: LoginFormSchema): Promise<AuthInfo> {
  const { data: resData } = await axios.post("/v1/auth/login", data);

  return {
    token: resData.accessToken,
    user: {
      id: "97c6a3bf-eb52-46d5-8cb9-c2a3c32a118d",
      email: data.email,
      firstName: "Alexis",
      lastName: "Navarro",
    },
  };
}
