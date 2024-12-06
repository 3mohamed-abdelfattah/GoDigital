import { useState } from "react"
// Images
import Symbol from "@/assets/images/icon.png"
// Icons
import * as Icons from "@/utils/icons.util"

export const HeroBlogSection = () => {
    const [toggle, setToggle] = useState(false) // Slide Bar Toggle

    // Function to invert state on click
    const handleToggle = () => {
        setToggle((prev) => !prev);
    };

    return (
        <main className="bg-secondaryColor mx-6 lg:mx-20 rounded-3xl md:rounded-[58px]">

            {/* First Hero Section [Logo & Titles] */}
            <section
                className="flex flex-col justify-center items-center bg-primaryBgColor text-center rounded-3xl md:rounded-[58px] text-primaryColor py-6 md:py-12 md:max-h-[590px]"
                style={{ boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)" }}
            >
                {/* Hero Section Logo */}
                <img src={Symbol} alt="Go Digital Icon" className="w-[100px] md:w-[199px]" />
                {/* Hero Section Titles */}
                <h1 className="max-w-[806px] mx-5 tiny:text-2xl vsm:text-4xl md:text-6xl font-semibold vsm:leading-[51.96px] md:leading-[81.96px]">Our Blog</h1>
                <h2 className="mt-5 mb-6 mx-5 max-w-[519px] text-xs vsm:text-base md:text-[22px] vsm:leading-[30.05px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            </section>

            {/* Toggle Bar [Travel Insurance] */}
            <section className={`flex flex-wrap justify-center items-center gap-10 rounded-3xl md:rounded-[58px] text-center text-primaryColor py-4 md:py-8 mx-5 md:mx-20 transition_all ${toggle ? 'max-h-96' : 'max-h-32'}`}>
                {toggle ?
                    <span className="flex flex-col justify-center items-center gap-4 md:gap-7">
                        <Icons.PlaneIcon />
                        <h3 className="font-bold md:text-3xl text-center">Travel Insurance</h3>
                        <span onClick={handleToggle} className="text-primaryColor hover:text-primaryBgColor rotate-180 cursor-pointer"><Icons.BottomArrowIcon /></span>
                    </span>
                    : <span onClick={handleToggle} className="text-primaryBgColor hover:text-primaryColor cursor-pointer"><Icons.BottomArrowIcon /></span>}
            </section>

        </main>
    )
}