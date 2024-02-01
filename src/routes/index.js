import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Categories from "../pages/categories";
import { PageWithHeader } from "../utils";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWithHeader component={<Home />} />,
    children: [
      {
        path: "categories",
        element: <Categories />,
      },
    ],
  },
]);
