import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "@/modules/home/pages/home";
import AppLayout from "../shared/components/layout/app-layouts";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />}>
        <Route path="" element={<Home />} />
      </Route>

      {/* <Route path="/login" element={<GuestOnlyRoute element={<Login />} />} /> */}
    </>
  )
);
