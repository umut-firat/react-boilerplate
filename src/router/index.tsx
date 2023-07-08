import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout";
import Home from "../pages/Home";
import Test from "../pages/Test";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);

export default router;
