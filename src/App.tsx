import { RouterProvider } from "react-router-dom";
import { router } from "./modules/routing/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./modules/shared/components/ui/toaster";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
