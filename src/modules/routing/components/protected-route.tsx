import { useAuth } from "@/modules/auth/context/auth-context";
import { Navigate, useLocation } from "react-router-dom";

export interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ redirectTo: location.pathname }} />;
  }

  return element;
};

export default ProtectedRoute;
