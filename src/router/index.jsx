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
    {
        path: "/*",
        element: <h1 className="flex justify-center items-center text-9xl h-screen text-secondaryColor font-bold">Soon</h1>,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;