import Filter from "@/modules/shared/components/forms/filter";
import { IoFilterSharp } from "react-icons/io5";

const ProductFilters = () => {
  return (
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
  );
};

export default ProductFilters;
