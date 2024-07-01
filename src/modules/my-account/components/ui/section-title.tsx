import { cn } from "@/modules/shared/lib";

export interface SectionTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const SectionTitle = ({ className, ...props }: SectionTitleProps) => {
  return (
    <h2
      className={cn("text-2xl text-primary font-semibold mb-3", className)}
      {...props}
    />
  );
};

export default SectionTitle;
