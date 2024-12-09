import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// Icons
import * as Icons from "@/utils/icons.util";
// Image
import Logo from "@/assets/images/logo.png";

// Define routes for each link
const routes = {
    "Αρχική": "/",
    "Προϊόντα": "/products",
    "Σχετικά με εμάς": "/about",
    "Blog": "/blog",
    "Επικοινωνία": "/contact",
};

// Submenu items for "Προϊόντα"
const productSubmenu = [
    { name: "Ταξιδιωτική", path: "/products/travel" },
    { name: "Εγγυήσεων", path: "/products/guarantees" },
    { name: "Ευθύνης Οδικού Μεταφορέα", path: "/products/road-carrier-professional-liability" },
    { name: "Προσωπικών Ατυχημάτων Αλλοδαπών", path: "/products/medical-insurance-foreigners" },
    { name: "Ευθύνης Ασφαλιστικών Διαμεσολαβητών", path: "/products/professional-liability-insurance-intermediaries" },
];

export const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // State for submenu visibility
    const [active, setActive] = useState(""); // State for active menu item
    const [activeSubmenu, setActiveSubmenu] = useState(""); // State for active submenu item

    // Update `active` state based on current location
    useEffect(() => {
        // Check if current path matches any of the main routes
        const currentRoute = Object.keys(routes).find(
            (key) => routes[key] === location.pathname
        );

        // Check if current path matches any product submenu item
        const activeSubItem = productSubmenu.find(
            (item) => item.path === location.pathname
        );

        if (activeSubItem) {
            setActive("Προϊόντα"); // Highlight main menu
            setActiveSubmenu(activeSubItem.name); // Highlight the submenu item
        } else if (currentRoute) {
            setActive(currentRoute);
            setActiveSubmenu(""); // Clear submenu highlight
        } else {
            setActive("");
            setActiveSubmenu(""); // Clear all highlights
        }
    }, [location]);

    // Toggle the mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Toggle submenu visibility
    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    return (
        <header className="flex justify-between md:justify-around items-center mt-3 mb-2 vsm:mt-9 vsm:mb-5 mx-8 md:mx-5">
            {/* Logo */}
            <img src={Logo} alt="Go Digital Logo" width={140} />

            {/* Navigation Links */}
            <ul
                className={`absolute top-24 right-5 bg-white shadow-lg rounded-lg flex flex-col gap-1 md:gap-4 items-start p-1 md:p-5 font-semibold transition_all
                ${isMenuOpen ? "opacity-100 pointer-events-auto visible shadow-inner border md:border-none" : "invisible md:visible pointer-events-none md:pointer-events-auto opacity-0 "}
                md:static md:opacity-100 md:translate-x-0 md:flex md:flex-row md:gap-2 lg:gap-7 xl:gap-14 md:p-0 md:bg-transparent md:shadow-none`}
            >
                {/* Array of navigation links */}
                {Object.keys(routes).map((nav, index) => (
                    <li
                        key={index}
                        className={`${active === nav ? "bg-secondaryColor text-white" : "hover:bg-primaryBgColor hover:text-white"} w-full md:w-auto rounded md:rounded-3xl px-4 py-2 cursor-pointer transition_all relative md:active:scale-110`}
                        onClick={() => nav === "Προϊόντα" && toggleSubmenu()} // Toggle submenu for "Προϊόντα"
                    >
                        {nav === "Προϊόντα" ? (
                            <span className="flex items-center gap-1">
                                {nav} <Icons.ToggleArrowIcon />
                            </span>
                        ) : (
                            <Link to={routes[nav]}>{nav}</Link>
                        )}

                        {/* Submenu for "Προϊόντα" */}
                        {nav === "Προϊόντα" && isSubmenuOpen && (
                            <ul className="absolute top-full -right-1 md:-left-10 bg-white z-50 text-black rounded-3xl shadow-xl mt-2 text-sm w-80 flex flex-col gap-1 overflow-hidden">
                                {productSubmenu.map((item, subIndex) => (
                                    <Link
                                        to={item.path}
                                        key={subIndex}
                                        className={`${activeSubmenu === item.name ? "bg-secondaryColor text-white" : ""} hover:bg-secondaryColor hover:text-white`}
                                    >
                                        <li className="p-2 mx-3 border-b border-secondaryColor/20 transition_all">
                                            {item.name}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            <section className="flex items-center gap-5">
                {/* User Profile Icon */}
                <span className="flex justify-center items-center bg-secondaryColor hover:bg-primaryBgColor rounded-full w-10 h-10 cursor-pointer transition_all active:scale-125">
                    <Icons.UserIcon />
                </span>

                {/* Hamburger Icon for Mobile */}
                <span
                    className="md:hidden flex items-center cursor-pointer active:scale-110"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <Icons.CloseIcon /> : <Icons.MenuIcon />}
                </span>
            </section>
        </header>
    );
};