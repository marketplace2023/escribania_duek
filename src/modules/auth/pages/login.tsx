import { Button } from "@/modules/shared/components/ui/button";
import { Checkbox } from "@/modules/shared/components/ui/checkbox";
import { Input } from "@/modules/shared/components/ui/input";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import loginImage from "@/assets/login_shirt.png";
import clsx from "clsx";

const Login = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2">
        <div className="w-full max-w-[450px]">
          <div className="mb-6">
            <h2 className="text-3xl text-primary mb-3">Regístrate</h2>
            <p className="text-gray-500">
              Acceso gratuito a todas las herramientas de tu estampa
            </p>
          </div>

          <div className="flex justify-between mb-3">
            <Button variant="outline" size="icon">
              <GitHubLogoIcon className="h-4 w-4" />
            </Button>
          </div>

          <form className="space-y-3 mb-3">
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Nombre" />
              <Input placeholder="Apellido" />
            </div>
            <Input placeholder="Email" />
            <Input type="password" placeholder="Contraseña" />

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-xs text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Me gustaria recibir las últimas ofertas y novedades
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-xs text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                He leído y acepto los{" "}
                <a href="#" className="underline underline-offset-2">
                  Términos y condiciones{" "}
                </a>
                y las{" "}
                <a href="#" className="underline underline-offset-2">
                  Politicas de Privacidad
                </a>
              </label>
            </div>

            <Button>Registrarme</Button>
          </form>

          <p className="text-xs">
            ¿Ya tienes una cuenta?{" "}
            <a href="#" className="text-primary font-semibold">
              Iniciar sesión
            </a>
          </p>
        </div>

        <div className="flex flex-col items-end">
          <div
            className="w-full max-w-[400px] p-3 aspect-[3/4] flex flex-col justify-between border-2 border-primary rounded-md bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${loginImage})` }}
          >
            <p className="p-2 bg-primary/80 text-3xl text-primary-foreground text-center rounded-md">
              10% Menos despues de registrarte
            </p>
            <p className="p-2 bg-primary/80 text-3xl text-primary-foreground text-center rounded-md">
              Tienda DeTodito
            </p>
          </div>

          <div className="w-full max-w-[400px] mt-3 space-y-2">
            <p className="text-xl font-semibold">
              ¡Precios hasta 30% más bajos con Tu Estampa!
            </p>
            <p>
              Accede a beneficios exclusivos con nuesto plan mensual. Cientos de
              clientes ya han probado y han aumentado sus ventas más de un 25%.
            </p>
            <p>¡Empieza tu prueba ahora!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
