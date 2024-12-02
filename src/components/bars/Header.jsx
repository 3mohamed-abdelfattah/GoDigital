import React from 'react'
import Logo from '../../assets/images/logo.png'
import * as Icons from '@/utils/icons.util'

export const Header = () => {
    return (
        <header className="flex justify-around items-center my-9">

            {/* Logo */}
            <img src={Logo} alt='Go Digital Logo' width={190} height={69} />

            {/* Navigation Links */}
            <ul className="flex gap-16 items-center font-semibold text-lg">
                {['Αρχική', 'Προϊόντα', 'Σχετικά με εμάς', 'Blog', 'Επικοινωνία'].map((nav, index) =>
                    <li key={index} className="hover:bg-secondaryColor hover:text-white hover:rounded-3xl px-4 py-2 cursor-pointer">
                        {nav == 'Προϊόντα' ? <span className="flex items-center gap-1">{nav} <Icons.ToggleArrowIcon />  </span> : nav}
                    </li>
                )}
            </ul>

            {/* User Profile Icon */}
            <span className="flex justify-center items-center bg-secondaryColor rounded-full w-10 h-10">
                <Icons.UserIcon />
            </span>

        </header>
    )
}