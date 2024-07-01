import { Button } from "@/modules/shared/components/ui/button";
import { Input } from "@/modules/shared/components/ui/input";
import { useForm } from "react-hook-form";
import {
  ProfilePasswordSchema,
  profilePasswordSchema,
} from "../../zod-schemas/profile-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/modules/shared/components/ui/form";
import { updatePassword } from "../../api/profile-api";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/modules/shared/components/ui/use-toast";

const ProfilePasswordForm = () => {
  const { toast } = useToast();

  const form = useForm<ProfilePasswordSchema>({
    resolver: zodResolver(profilePasswordSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
  });

  const updatePasswordMutation = useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      toast({
        title: "Contraseña actualizado.",
        description: "Se actualizó la contraseña correctamente!",
      });
      form.reset();
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    updatePasswordMutation.mutate(data);
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Contraseña actual</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Ingresa la contraseña actual..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña nueva</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Ingresa la nueva contraseña..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPasswordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar contraseña</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirma la nueva contraseña..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-2 flex justify-end">
            <Button type="submit" isLoading={updatePasswordMutation.isPending}>
              Guardar
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ProfilePasswordForm;
