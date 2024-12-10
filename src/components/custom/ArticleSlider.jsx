import { Link } from "react-router-dom"
// Components
import { ImageSlider } from "@/components"
// Images
import ArticleImg1 from "@/assets/images/forHome/article1.jpeg"
import ArticleImg2 from "@/assets/images/forHome/article2.jpeg"
import ArticleImg3 from "@/assets/images/forHome/article3.jpeg"

export const ArticleSlider = ({
    title = 'Άρθρα',
    subTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    url,
    directionStyle = 'lg:flex-row lg:pl-32',
    buttonStyle = 'bg-secondaryColor hover:bg-primaryBgColor',
    backgroundStyle = 'bg-primaryBgColor right-0 rounded-s-[58px]',
    direction
}) => {
    return (
        <section className={`${directionStyle} flex flex-col justify-end lg:justify-center gap-10 items-center my-8 sm:my-16 lg:my-48 overflow-hidden`}>
            <aside className="flex flex-col w-3/4 lg:w-[311px] mb-12 lg:mb-0">
                {/* Titles */}
                <h1 data-aos="zoom-in" className="font-bold text-3xl sm:text-[40px]">{title}</h1>
                <h2 data-aos="zoom-in" className="sm:text-[22px] sm:leading-[26.63px] my-3 sm:my-8 lg:w-[311px]">{subTitle}</h2>
                {/* More Button */}
                <Link to={url}>
                    <button
                        className={`${buttonStyle} w-32 sm:w-[213px] h-12 sm:h-[65px] rounded-[10px] sm:text-lg text-primaryColor font-bold transition_all active:scale-110`}
                        style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                        data-aos="zoom-in"
                    >
                        Περισσότερα
                    </button>
                </Link>
            </aside>

            {/* Slider Background*/}
            <span className={`${backgroundStyle} absolute w-11/12 lg:w-3/5 h-[480px] sm:h-[600px] lg:h-[693px] -z-30`}></span>

            {/* Dynamic Slider Component */}
            <ImageSlider slides={slidesData} direction={direction} />
        </section>
    )
}

// Data Will Come From API
const slidesData = [
    {
        imgSrc: ArticleImg1,
        title: "Lorem ipsum dolor sit amet",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        readMoreUrl: "https://example.com/",
    },
    {
        imgSrc: ArticleImg2,
        title: "Lorem ipsum dolor sit amet",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        readMoreUrl: "https://example.com/",
    },
    {
        imgSrc: ArticleImg3,
        title: "Lorem ipsum dolor sit amet",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        readMoreUrl: "https://example.com/",
    },
];