import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import { HomePage, ForeignersPage, GuaranteesPage, IntermediariesPage, LiabilityPage, TravelPage, BlogPage, TravelDetail, GuaranteesDetail, LiabilityDetail, ForeignersDetail, IntermediariesDetail, Profile, ProfileContracts } from "@/pages";
import { Header } from "../components/bars/Header";

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
        path: "/blog/travel",
        element: <TravelDetail />,
    },
    {
        path: "/blog/guarantees",
        element: <GuaranteesDetail />,
    },
    {
        path: "/blog/road-carrier-professional-liability",
        element: <LiabilityDetail />,
    },
    {
        path: "/blog/medical-insurance-foreigners",
        element: <ForeignersDetail />,
    },
    {
        path: "/blog/professional-liability-insurance-intermediaries",
        element: <IntermediariesDetail />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/profile-contract",
        element: <ProfileContracts />,
    },
    {
        path: "/*",
        element: <div>
            <Header />
            <h1 className="flex justify-center items-center text-3xl mt-52 text-secondaryColor font-bold">Soon...</h1>
        </div>,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;