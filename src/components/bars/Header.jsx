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

export const Header = () => {
    const location = useLocation();
    const [active, setActive] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Update `active` state based on current location
    useEffect(() => {
        const currentRoute = Object.keys(routes).find(
            (key) => routes[key] === location.pathname
        );
        if (currentRoute) setActive(currentRoute);
    }, [location]);

    // Toggle the mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex justify-between md:justify-around items-center mt-3 mb-2 vsm:mt-9 vsm:mb-5 mx-8 md:mx-5">
            {/* Logo */}
            <img src={Logo} alt="Go Digital Logo" width={140} />

            {/* Navigation Links */}
            <ul
                className={`absolute top-24 right-5 bg-white shadow-lg rounded-lg flex flex-col gap-4 items-start p-5 font-semibold transition_all
                ${isMenuOpen ? "opacity-100 pointer-events-auto visible shadow-inner border md:border-none" : "invisible pointer-events-none opacity-0 "}
                md:static md:opacity-100 md:translate-x-0 md:flex md:flex-row md:gap-2 lg:gap-7 xl:gap-14 md:p-0 md:bg-transparent md:shadow-none`}
            >
                {/* Array of navigation links */}
                {Object.keys(routes).map((nav, index) => (
                    <Link to={routes[nav]} key={index}>
                        <li
                            onClick={() => setActive(nav)}
                            className={`${active === nav ? "bg-secondaryColor text-white" : "hover:bg-secondaryColor hover:text-white"
                                } rounded-3xl px-4 py-2 cursor-pointer transition_all`}
                        >
                            {nav === "Προϊόντα" ? (
                                <span className="flex items-center gap-1">
                                    {nav} <Icons.ToggleArrowIcon />
                                </span>
                            ) : (
                                nav
                            )}
                        </li>
                    </Link>
                ))}
            </ul>

            <section className="flex items-center gap-5">
                {/* User Profile Icon */}
                <span className="flex justify-center items-center bg-secondaryColor hover:bg-primaryBgColor rounded-full w-10 h-10 cursor-pointer transition_all">
                    <Icons.UserIcon />
                </span>

                {/* Hamburger Icon for Mobile */}
                <span
                    className="md:hidden flex items-center cursor-pointer"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <Icons.CloseIcon /> : <Icons.MenuIcon />}
                </span>
            </section>
        </header>
    );
};