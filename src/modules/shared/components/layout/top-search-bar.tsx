import logoWithText from "@/assets/logo_with_text.png";
import { Input } from "@/modules/shared/components/ui/input";

const TopSearchBar = () => {
  return (
    <div className="flex flex-shrink-0 items-center h-16 px-2 relative">
      <img src={logoWithText} alt="Tu estampa" className="h-10" />

      <Input
        className="w-[600px] absolute left-1/2 transform -translate-x-1/2"
        placeholder="¿Qué estás buscando?"
      />
    </div>
  );
};

export default TopSearchBar;
