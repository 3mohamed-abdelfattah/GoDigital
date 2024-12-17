import { Link } from "react-router-dom";
// Icons
import * as Icons from "@/utils/icons.util";
// Image
import Logo from "@/assets/images/logo.png";

export const QuoteHeader = () => {
    return (
        <header className="flex justify-between items-center mt-3 vsm:mt-9 mx-8 xl:mx-32">
            {/* Logo */}
            <img src={Logo} alt="Go Digital Logo" width={140} />

            <section className="flex items-center gap-5">
                {/* Hamburger Icon for Mobile */}
                <Icons.ReloadIcon />

                {/* User Profile Icon */}
                <Link to="/profile" className="flex justify-center items-center bg-[#1E3F76]/30 hover:bg-secondaryColor rounded-full w-10 h-10 cursor-pointer transition_all active:scale-125">
                    <Icons.UserIcon />
                </Link>
            </section>
        </header>
    )
}