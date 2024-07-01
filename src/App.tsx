import { RouterProvider } from "react-router-dom";
import { router } from "./modules/routing/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./modules/auth/context/auth-context";
import { Toaster } from "./modules/shared/components/ui/toaster";

const queryClient = new QueryClient();

const App = () => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;
