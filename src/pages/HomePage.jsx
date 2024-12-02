import React from 'react'
import { Header } from '@/components'
import Icon from '../assets/images/icon.png'

export const HomePage = () => {
    return (
        <main>
            <Header />

            <section className="flex flex-col justify-center items-center bg-primaryBgColor rounded-[58px] text-center text-primaryColor py-12 mx-20">
                {/* Logo */}
                <img src={Icon} alt='Go Digital Icon' width={199} />

                <p className="max-w-[806px] text-6xl font-semibold leading-[81.96px]">Lorem ipsum dolor sit amet consectetur adipiscing</p>

                <p className="mt-5 mb-6 max-w-[519px] text-[22px] leading-[30.05px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
        </main>
    )
}