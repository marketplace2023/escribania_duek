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
      id: "the_id",
      email: data.email,
      name: "The name",
    },
  };
}
