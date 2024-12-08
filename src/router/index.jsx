import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import { HomePage, ForeignersPage, GuaranteesPage, IntermediariesPage, LiabilityPage, TravelPage, BlogPage } from "@/pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/products/travel",
        element: <TravelPage />,
    },
    {
        path: "/products/guarantees",
        element: <GuaranteesPage />,
    },
    {
        path: "/products/road-carrier-professional-liability",
        element: <LiabilityPage />,
    },
    {
        path: "/products/medical-insurance-foreigners",
        element: <ForeignersPage />,
    },
    {
        path: "/products/professional-liability-insurance-intermediaries",
        element: <IntermediariesPage />,
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