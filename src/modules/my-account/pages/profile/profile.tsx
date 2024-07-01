import SectionTitle from "../../components/ui/section-title";
import ProfileDataForm from "./profile-data-form";
import ProfilePasswordForm from "./profile-password-form";

const Profile = () => {
  return (
    <div>
      <SectionTitle>Perfil</SectionTitle>
      <ProfileDataForm />

      <SectionTitle className="mt-3">Cambiar contraseña</SectionTitle>
      <ProfilePasswordForm />
    </div>
  );
};

export default Profile;
