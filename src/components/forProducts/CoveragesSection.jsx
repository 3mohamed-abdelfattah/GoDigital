import { useState } from "react";
// Icons
import * as Icons from "@/utils/icons.util";
// Splide Library
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export const CoveragesSection = ({ title, description, data }) => {
    const [toggles, setToggles] = useState({}); // state to show and hide description

    // reverse state when clicked 
    const handleToggle = (index) => {
        setToggles((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <main className="flex flex-col justify-center items-center pt-16 w-full">
            <h1 data-aos="zoom-in" className="text-3xl md:text-4xl font-extrabold text-primaryBgColor text-center">
                {title}
            </h1>
            <h2 data-aos="zoom-in" className="sm:text-lg lg:text-[22px] font-medium text-primaryBgColor px-10 max-w-[911px] text-center my-6">
                {description}
            </h2>

            <section className="w-full">
                <Splide
                    options={{
                        focus: "center",
                        rewind: true,
                        snap: true,
                        arrows: false,
                        pagination: true,
                        perPage: 4,
                        height: "450px",
                        gap: "0px", // Remove gaps between slides
                        breakpoints: {
                            1500: { perPage: 3 },
                            1024: { perPage: 2 },
                            680: { perPage: 1, height: "430px", arrows: true, },
                            460: { height: "380px", },
                        },
                    }}
                    className="w-full"
                >
                    {/* Show Each Slide in data */}
                    {data.map((slide, index) => (
                        <SplideSlide key={index} className="flex justify-center w-full">
                            <article
                                onClick={() => handleToggle(index)}
                                className="relative flex justify-center w-80 h-72 vsm:w-[350px] mt-5 vsm:h-[340px] sm:w-[381px] sm:h-[373px] bg-primaryBgColor rounded-[20px] overflow-hidden cursor-pointer mx-2"
                            >
                                <span className="mt-16" data-aos="zoom-in">
                                    <Icons.MedicalIcon />
                                </span>
                                <span className="absolute bottom-0 right-0 w-full bg-secondaryBgColor py-8 vsm:py-10 rounded-[20px] text-center overflow-hidden">
                                    <h3 data-aos="zoom-in" className="sm:text-[22px] font-bold">{slide.title}</h3>
                                    {toggles[index] && (
                                        <h4 data-aos="zoom-in" className="text-sm sm:text-lg px-1">
                                            {slide.description}
                                        </h4>
                                    )}
                                </span>
                            </article>
                        </SplideSlide>
                    ))}
                </Splide>
            </section>
        </main>
    );
};
