import AuthTitle from "./auth-title";

interface AuthTitleSectionProps {
  title: string;
}

const AuthTitleSection = ({ title }: AuthTitleSectionProps) => {
  return (
    <div className="mb-6">
      <AuthTitle>{title}</AuthTitle>
      <p className="text-gray-500">
        Acceso gratuito a todas las herramientas de tu estampa
      </p>
    </div>
  );
};

export default AuthTitleSection;
