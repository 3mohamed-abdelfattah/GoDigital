import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import { HomePage, ProductPage, BlogPage } from "@/pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/products",
        element: <ProductPage />,
    },
    {
        path: "/blog",
        element: <BlogPage />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;