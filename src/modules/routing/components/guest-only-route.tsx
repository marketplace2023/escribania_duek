import { useAuth } from "@/modules/auth/context/auth-context";
import { Navigate, useLocation } from "react-router-dom";

export interface ProtectedRouteProps {
  element: JSX.Element;
}

const GuestOnlyRoute = ({ element }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const redirectTo = location.state?.redirectTo ?? "/";

  if (isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return element;
};

export default GuestOnlyRoute;
