import { Link } from "react-router-dom";
// Splide Library
import { Splide } from "@splidejs/react-splide";
import { SplideSlider } from "@/components";
import "@splidejs/react-splide/css";

export const ImageSlider = ({ slides }) => {
    return (
        <Splide className="slider_container"
            options={{
                type: "loop", // Infinite Scroll
                rewind: true,
                drag: "free", // Free dragging images
                rewindByDrag: true,
                snap: true,
                arrows: false,
                fixedWidth: "33rem",
                width: "82%",
                padding: { right: "60%", bottom: "80%" },
                pagination: true, // Use Dots to navigate between slides
                breakpoints: {
                    1024: {
                        width: "100%", // Full width for screens smaller than 1024px
                        padding: { right: "0%" },
                    },
                    640: {
                        fixedWidth: "25rem", // Adjust fixed width for screens smaller than 640px
                    },
                },
            }}
        >
            {/* Dynamic Slider based in data come from api */}
            {slides.map((slide, index) => (
                <SplideSlider image={slide.imgSrc} key={index}>
                    <h3 className="text-lg font-bold max-w-[446px] text-[28px]">{slide.title}</h3>
                    <p className="text-sm max-w-[446px] text-[22px] font-semibold leading-[26.63px]">
                        {slide.subTitle}
                    </p>
                    <Link to={slide.readMoreUrl} className="text-secondaryColor underline">
                        Read More
                    </Link>
                </SplideSlider>
            ))
            }
        </Splide>
    )
}