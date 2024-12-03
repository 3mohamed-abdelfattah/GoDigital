import { SplideSlide } from '@splidejs/react-splide';
import '@/styles/slider.css'

export const SplideSlider = ({ children, image }) => {
    return (
        <SplideSlide>
            <div className="relative rounded-[32px] max-w-[510px]">
                {/* image */}
                <img
                    className="rounded-[32px] w-[510px] h-[500px] object-cover"
                    src={image}
                    alt="About Image"
                />
                {/* gradient white color */}
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent rounded-[32px]">
                    <span className="absolute flex flex-col gap-3 bottom-4 left-4 text-black">
                        {children}
                    </span>
                </div>
            </div>
        </SplideSlide>
    )
}