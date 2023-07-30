import { Navigate, createBrowserRouter } from "react-router-dom";

import Layout from "../layout";
import Home from "../pages/Home";
import DialogTest from "../pages/DialogTest";
import FormTest from "../pages/FormTest";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dialog-test",
        element: <DialogTest />,
      },
      {
        path: "form-test",
        element: <FormTest />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export default router;
