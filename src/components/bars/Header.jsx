import { useState } from 'react'
// Icons
import * as Icons from '@/utils/icons.util'
// Image
import Logo from '@/assets/images/logo.png'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Mobile Menu View
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="flex justify-between md:justify-around items-center mt-9 mb-5 mx-8 md:mx-5">

            {/* Logo */}
            <img src={Logo} alt='Go Digital Logo' width={140} />

            {/* Navigation Links */}
            <ul
                className={`absolute top-24 right-5 bg-white shadow-lg rounded-lg flex flex-col gap-4 items-start p-5 font-semibold transition-transform 
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-96'} 
                md:static md:translate-x-0 md:flex-row md:gap-2 lg:gap-7 xl:gap-14 md:p-0 md:bg-transparent md:shadow-none`}
            >
                {['Αρχική', 'Προϊόντα', 'Σχετικά με εμάς', 'Blog', 'Επικοινωνία'].map((nav, index) =>
                    <li
                        key={index}
                        className="hover:bg-secondaryColor hover:text-white rounded-3xl px-4 py-2 cursor-pointer transition_all"
                    >
                        {nav == 'Προϊόντα' ? (
                            <span className="flex items-center gap-1">
                                {nav} <Icons.ToggleArrowIcon />
                            </span>
                        ) : (
                            nav
                        )}
                    </li>
                )}
            </ul>

            <section className='flex items-center gap-5'>
                {/* User Profile Icon */}
                <span className="flex justify-center items-center bg-secondaryColor hover:bg-primaryBgColor rounded-full w-10 h-10 cursor-pointer transition_all">
                    <Icons.UserIcon />
                </span>

                {/* Hamburger Icon for Mobile */}
                <span className="md:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
                    <Icons.MenuIcon />
                </span>
            </section>

        </header>
    )
}