import { AuthUser } from "./auth-user";

export interface AuthInfo {
  user: AuthUser;
  token: string;
}
