import { Button } from "@/modules/shared/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/modules/shared/components/ui/tabs";
import RegisterForm from "../components/register/register-form";
import { Link } from "react-router-dom";
import AuthTitleSection from "../components/ui/auth-title-section";

const Register = () => {
  return (
    <>
      <AuthTitleSection title="Regístrate" />

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
          <RegisterForm />
        </TabsContent>

        <TabsContent value="store">
          <h2>The stores form</h2>
        </TabsContent>
      </Tabs>

      <p className="text-xs">
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login" className="text-primary font-semibold">
          Iniciar sesión
        </Link>
      </p>
    </>
  );
};

export default Register;
