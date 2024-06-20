import { Button } from "@/modules/shared/components/ui/button";
import { Checkbox } from "@/modules/shared/components/ui/checkbox";
import { Input } from "@/modules/shared/components/ui/input";
import { useForm } from "react-hook-form";
import {
  RegisterFormSchema,
  registerFormSchema,
} from "../../zod-schemas/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormMessage,
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/modules/shared/components/ui/form";

const RegisterForm = () => {
  // const registerMutation =

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: RegisterFormSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form className="space-y-3 mb-3" onSubmit={form.handleSubmit(onSubmit)}>
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
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Apellido" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center space-x-2">
          <Checkbox id="receiveOffers" />
          <label
            htmlFor="receiveOffers"
            className="text-xs text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Me gustaria recibir las últimas ofertas y novedades
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <FormField
            control={form.control}
            name="acceptTermsOfService"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <span className="text-xs text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    He leído y acepto los{" "}
                    <a href="#" className="underline underline-offset-2">
                      Términos y condiciones
                    </a>{" "}
                    y las{" "}
                    <a href="#" className="underline underline-offset-2">
                      Politicas de Privacidad
                    </a>
                  </span>
                </div>
                <FormMessage className="block mt-2" />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Registrarme</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
