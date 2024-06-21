import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/modules/shared/components/ui/tabs";
import AuthTitleSection from "../components/ui/auth-title-section";
import { Button } from "@/modules/shared/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import LoginForm from "../components/forms/login-form";

const Login = () => {
  return (
    <>
      <AuthTitleSection title="Iniciar sesión" />

      <Tabs defaultValue="customer">
        <div className="flex justify-between mb-3">
          <Button variant="outline" size="icon">
            <GitHubLogoIcon className="h-4 w-4" />
          </Button>

          <TabsList>
            <TabsTrigger value="customer">Comprador</TabsTrigger>
            <TabsTrigger value="store">Vendedor</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="customer">
          <LoginForm />
        </TabsContent>

        <TabsContent value="store">
          <h2>The stores form</h2>
        </TabsContent>
      </Tabs>

      <p className="text-xs">
        ¿No tienes una cuenta?{" "}
        <Link to="/registro" className="text-primary font-semibold">
          Registrate
        </Link>
      </p>
    </>
  );
};

export default Login;
