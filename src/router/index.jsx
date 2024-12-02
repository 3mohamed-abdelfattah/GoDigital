import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import { HomePage } from "@/pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;