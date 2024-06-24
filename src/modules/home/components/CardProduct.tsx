import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/modules/shared/components/ui/card";

const CardProduct = () => {
  return (
    <Card className="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <CardHeader className="h-40">
        <img
          className="rounded-t-lg w-full h-full object-contain"
          src="/src/assets/image4.png"
          alt="product image"
        />
      </CardHeader>
      <CardContent className="p-3">
        <CardTitle className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          Mochila estampada 1
        </CardTitle>
        <div className="flex items-center mt-2 mb-3">
          <span className="text-md font-medium text-gray-500 line-through mr-2">
            $99.999
          </span>
          <span className="text-md font-bold text-purple-600 dark:text-purple-400">
            $89.999
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
