import { Button } from "@/modules/shared/components/ui/button";
import { cn } from "@/modules/shared/lib";

export interface ShippingInfoOfferWidgetProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  buttonText: string;
}

const ShippingInfoOfferWidget = ({
  image,
  imageAlt,
  className,
  title,
  description,
  buttonText,
  ...props
}: ShippingInfoOfferWidgetProps) => {
  return (
    <div
      className={cn(
        "max-w-72 flex flex-col items-center justify-between text-center",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={imageAlt}
          className="w-32 aspect-square object-contain"
        />
        <p className="text-lg font-semibold mt-3">{title}</p>
        <p>{description}</p>
      </div>
      <Button
        variant="outline"
        className="text-primary hover:text-primary/90 mt-3"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ShippingInfoOfferWidget;
