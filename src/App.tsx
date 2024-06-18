import { RouterProvider } from "react-router-dom";
import { router } from "./modules/routing/router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
