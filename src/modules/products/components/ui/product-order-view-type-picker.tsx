import { CiGrid41 } from "react-icons/ci";
import { TfiLayoutListThumb } from "react-icons/tfi";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/modules/shared/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/modules/shared/components/ui/tooltip";
import { cn } from "@/modules/shared/lib";

interface ProductOrderViewTypePickerProps {
  onGridView?: () => void;
  onListView?: () => void;
  isGrid: boolean;
  isList: boolean;
}

const ProductOrderViewTypePicker = ({
  onGridView,
  onListView,
  isGrid,
  isList,
}: ProductOrderViewTypePickerProps) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-semibold">Ordenar por</span>

        <Select defaultValue="relevance">
          <SelectTrigger className="w-36 h-7">
            <SelectValue placeholder="Orden" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="relevance">Más relevancia</SelectItem>
              <SelectItem value="lowerPrice">Menor precio</SelectItem>
              <SelectItem value="greaterPrice">Mayor precio</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className={cn(
                  "inline-flex items-center justify-center text-primary text-xl p-1 ring-primary rounded",
                  isGrid && "ring-1"
                )}
                onClick={onGridView}
              >
                <CiGrid41 />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Vista de grilla</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className={cn(
                  "inline-flex items-center justify-center text-primary text-xl p-1 ring-primary rounded",
                  isList && "ring-1"
                )}
                onClick={onListView}
              >
                <TfiLayoutListThumb />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Vista de lista</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ProductOrderViewTypePicker;
