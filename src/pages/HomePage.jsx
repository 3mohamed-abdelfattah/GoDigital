import React from 'react'
// Components
import { Header, HeroSection } from '@/components'

export const HomePage = () => {
    return (
        <main>
            <Header />
            <HeroSection />

            <h1 className="text-center text-[40px] font-bold p-10">How it works</h1>
        </main>
    )
}