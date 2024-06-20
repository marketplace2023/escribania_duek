import { Button } from "@/modules/shared/components/ui/button";
import { Input } from "@/modules/shared/components/ui/input";
import { useForm } from "react-hook-form";
import {
  LoginFormSchema,
  loginFormSchema,
} from "../../zod-schemas/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormMessage,
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/modules/shared/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { login as loginToApi } from "../../api/auth";
import { handleFormError } from "@/modules/shared/util/handle-form-error";
import { useAuth } from "../../context/auth-context";

const LoginForm = () => {
  const { login } = useAuth();

  const loginMutation = useMutation({
    mutationFn: loginToApi,
    onSuccess: (authInfo) => {
      login(authInfo);
    },
    onError: handleFormError((key: any, message) =>
      form.setError(key, { message })
    ),
  });

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFormSchema) => {
    loginMutation.mutate(values);
  };

  return (
    <Form {...form}>
      <form className="space-y-3 mb-3" onSubmit={form.handleSubmit(onSubmit)}>
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

        <Button type="submit" isLoading={loginMutation.isPending}>
          Iniciar sesión
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
