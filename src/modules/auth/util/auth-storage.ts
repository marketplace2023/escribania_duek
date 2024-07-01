import { AuthInfo } from "../dtos/auth-info";

const AUTH_KEY = "tu-estampa-web-auth@1.0.0";

export function getAuth(): AuthInfo | null {
  const data = localStorage.getItem(AUTH_KEY);

  if (!data) {
    return null;
  }

  return JSON.parse(data) as AuthInfo;
}

export function storeAuth(authInfo: AuthInfo): void {
  localStorage.setItem(AUTH_KEY, JSON.stringify(authInfo));
}

export function deleteAuth(): void {
  localStorage.removeItem(AUTH_KEY);
}
