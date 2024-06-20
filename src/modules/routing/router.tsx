import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "@/modules/home/pages/home";
import AppLayout from "@/modules/shared/components/layout/app-layouts";
import AuthLayout from "@/modules/auth/components/layout/auth-layout";
import Register from "@/modules/auth/pages/register";
import Login from "../auth/pages/login";
import GuestOnlyRoute from "./components/guest-only-route";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />}>
        <Route path="" element={<Home />} />

        <Route path="" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route
            path="login"
            element={<GuestOnlyRoute element={<Login />} />}
          />
        </Route>
      </Route>
    </>
  )
);
