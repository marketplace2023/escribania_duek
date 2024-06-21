import Filter from "@/modules/shared/components/forms/filter";
import { IoFilterSharp } from "react-icons/io5";
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
import generateArray from "@/modules/shared/util/generate-array";
import { Button } from "@/modules/shared/components/ui/button";
import ProductCard from "../components/ui/product-card";

const Products = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-[290px_1fr]">
        {/* RESULTS COUNT COLUMN */}
        <div className="flex items-center">
          <p className="text-xs text-gray-600">1000 resultados</p>
        </div>

        {/* ORDER AND VIEW TYPE COLUMN */}
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
            <button className="text-primary text-xl">
              <CiGrid41 />
            </button>
            <button className="text-primary text-xl">
              <TfiLayoutListThumb />
            </button>
          </div>
        </div>

        {/* FILTERS COLUMN */}
        <div className="space-y-5">
          <div className="flex items-center text-primary space-x-2">
            <IoFilterSharp className="text-xl" />
            <span className="font-semibold">Filtros</span>
          </div>

          <Filter
            title="Categorías"
            items={[
              { label: "Ropa, Zapatos y Accesorios (984)", value: 1 },
              { label: "Deportes y Fitness (252)", value: 2 },
            ]}
          />

          <Filter
            title="Descuentos"
            items={[
              { label: "Desde 5% OFF (24)", value: 5 },
              { label: "Desde 10% OFF (23)", value: 10 },
              { label: "Desde 20% OFF (16)", value: 20 },
              { label: "Desde 25% OFF (13)", value: 25 },
              { label: "Desde 30% OFF (11)", value: 30 },
              { label: "Desde 40% OFF (5)", value: 40 },
              { label: "Desde 50% OFF (1)", value: 50 },
            ]}
          />

          <Filter
            title="Precios"
            items={[
              { label: "Hasta US$ 19 (322)", value: [0, 18] },
              { label: "US$ 19 a US$ 27 (206)", value: [19, 27] },
              { label: "Más de US$ 27 (471)", value: [27, Infinity] },
            ]}
          />
        </div>
        {/* CONTENT COLUMNS */}
        <div className="space-y-5">
          <div className="grid grid-cols-3 gap-4">
            {generateArray(9).map((n) => (
              <ProductCard key={n} />
            ))}
          </div>

          <div className="text-center">
            <Button>Mostrar más productos</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
