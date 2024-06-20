import { Button } from "@/modules/shared/components/ui/button";
import { Checkbox } from "@/modules/shared/components/ui/checkbox";
import { Input } from "@/modules/shared/components/ui/input";
import { useForm } from "react-hook-form";
import {
  LoginFormSchema,
  loginFormSchema,
} from "../../zod-schemas/login-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormMessage,
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/modules/shared/components/ui/form";

const LoginForm = () => {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-3 mb-3">
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
              Términos y condiciones
            </a>{" "}
            y las{" "}
            <a href="#" className="underline underline-offset-2">
              Politicas de Privacidad
            </a>
          </label>
        </div>

        <Button type="submit">Registrarme</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
