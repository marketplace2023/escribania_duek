import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "@/modules/home/pages/home";
import AppLayout from "../shared/components/layout/app-layouts";
import AuthLayout from "../auth/components/layout/auth-layout";
import Login from "../auth/pages/login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />}>
        <Route path="" element={<Home />} />

        <Route path="" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Route>
    </>
  )
);
