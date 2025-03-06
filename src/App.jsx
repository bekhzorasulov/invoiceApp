import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/Details";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

function App() {
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:id",
          element: <Details />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routs} />;
}

export default App;
