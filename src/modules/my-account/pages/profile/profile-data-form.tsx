import { Button } from "@/modules/shared/components/ui/button";
import { Input } from "@/modules/shared/components/ui/input";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

const ProfileDataForm = () => {
  const form = useForm();

  const handleSubmit = form.handleSubmit(() => {});

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido" />
          <Input placeholder="Teléfono" />
          <Input placeholder="Correo electrónico" />

          <div className="col-span-2 flex justify-end">
            <Button type="submit">Guardar</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ProfileDataForm;
