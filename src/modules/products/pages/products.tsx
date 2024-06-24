import generateArray from "@/modules/shared/util/generate-array";
import { Button } from "@/modules/shared/components/ui/button";
import ProductCard from "../components/ui/product-card";
import { useViewTypeReduce } from "../hooks/use-view-type-reducer";
import ProductFilters from "../components/ui/product-filters";
import ProductOrderViewTypePicker from "../components/ui/product-order-view-type-picker";

const Products = () => {
  const { viewAsGrid, viewAsList, isGrid, isList } = useViewTypeReduce();

  return (
    <div className="container">
      <div className="grid grid-cols-[290px_1fr]">
        {/* RESULTS COUNT COLUMN */}
        <div className="flex items-center">
          <p className="text-xs text-gray-600">1000 resultados</p>
        </div>

        {/* ORDER AND VIEW TYPE COLUMN */}
        <ProductOrderViewTypePicker
          onGridView={viewAsGrid}
          onListView={viewAsList}
          isGrid={isGrid}
          isList={isList}
        />

        {/* FILTERS COLUMN */}
        <ProductFilters />

        {/* CONTENT COLUMNS */}
        <div className="space-y-5">
          {isGrid && (
            <div className="grid grid-cols-3 gap-4">
              {generateArray(9).map((n) => (
                <ProductCard key={n} />
              ))}
            </div>
          )}

          {isList && (
            <div className="grid grid-cols-1 gap-4">
              {generateArray(9).map((n) => (
                <ProductCard key={n} horizontal />
              ))}
            </div>
          )}

          <div className="text-center">
            <Button>Mostrar más productos</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
