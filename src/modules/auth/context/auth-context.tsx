import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthUser } from "../../auth/dtos/auth-user";
import { deleteAuth, getAuth, storeAuth } from "../util/auth-storage";
import CircularSpinner from "@/modules/shared/components/ui/circular-spinner";

type LoginFunction = (data: { user: AuthUser; token: string }) => void;

type AuthContextValue = {
  isAuthenticated: boolean;
  user: AuthUser | null;
  token: string | null;
  login: LoginFunction;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login: LoginFunction = useCallback(({ user, token }) => {
    setUser(user);
    setToken(token);
    storeAuth({ user, token });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    deleteAuth();
  }, []);

  const initAuth = useCallback(() => {
    const authInfo = getAuth();

    if (!authInfo) {
      return;
    }

    setUser(authInfo.user);
    setToken(authInfo.token);
  }, []);

  useEffect(() => {
    initAuth();
    setIsLoading(false);
  }, [initAuth]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {isLoading ? (
        <div className="h-screen w-screen flex items-center justify-center">
          <CircularSpinner />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth must be wrapped in an AuthContext");
  }

  return authContextValue;
}
