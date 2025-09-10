import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import PageNotFound from "@pages/PageNotFound";
import Home from "@pages/Home";
import Plans from "@pages/Plans";
import About from "@pages/About";
import Register from "@pages/Register";
import PlansDetailsPage from "@pages/PlansDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "plans", element: <Plans /> },
      { path: "plans/:planId", element: <PlansDetailsPage /> },
      { path: "about", element: <About /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
