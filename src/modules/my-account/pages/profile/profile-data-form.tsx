import { Button } from "@/modules/shared/components/ui/button";
import { Input } from "@/modules/shared/components/ui/input";
import { useForm } from "react-hook-form";
import {
  ProfileFormSchema,
  profileFormSchema,
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
import { Label } from "@/modules/shared/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../../api/profile-api";
import { useToast } from "@/modules/shared/components/ui/use-toast";
import { useAuth } from "@/modules/auth/context/auth-context";

const ProfileDataForm = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const form = useForm<ProfileFormSchema>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: user?.firstName ?? "",
      lastName: user?.lastName ?? "",
      phoneNumber: "",
    },
  });

  const updateProfileMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast({
        title: "Perfil actualizado.",
        description: "Se actualizó el perfil correctamente!",
      });
      // TODO: Update auth context
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    updateProfileMutation.mutate(data);
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese el nombre..." {...field} />
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
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese el apellido..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese el teléfono..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <Label>Correo electrónico</Label>
            <Input
              placeholder="Ingrese el correo"
              value={user?.email}
              readOnly
            />
          </div>

          <div className="col-span-2 flex justify-end">
            <Button type="submit">Guardar</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ProfileDataForm;
