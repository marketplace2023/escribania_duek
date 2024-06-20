import { cn } from "@/modules/shared/lib";

interface SectionTitleProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {}

const AuthTitle = ({ className, ...props }: SectionTitleProps) => {
  return (
    <h2 className={cn("text-3xl text-primary mb-3", className)} {...props} />
  );
};

export default AuthTitle;
