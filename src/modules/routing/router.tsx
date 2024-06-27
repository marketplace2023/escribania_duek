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
import ShippingInfo from "../shipping-info/pages/shipping-info";
import Products from "../products/pages/products";
import DesignIdeas from "../design-ideas/pages/designideas";
import ProductDetail from "../products/[id]/id";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/envios" element={<ShippingInfo />} />
        <Route path="/comprar" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/ideas-de-diseno" element={<DesignIdeas />} />

        <Route path="" element={<AuthLayout />}>
          <Route path="registro" element={<Register />} />
          <Route
            path="login"
            element={<GuestOnlyRoute element={<Login />} />}
          />
        </Route>
      </Route>
    </>
  )
);
