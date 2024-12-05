// Component
import { ImageSlider } from "@/components"
// Images
import ArticleImg1 from "@/assets/images/forHome/article1.jpeg"
import ArticleImg2 from "@/assets/images/forHome/article2.jpeg"
import ArticleImg3 from "@/assets/images/forHome/article3.jpeg"

export const ArticlesSection = () => {
    return (
        <main className="flex flex-col lg:flex-row justify-end lg:justify-center gap-10 lg:pl-32 items-center my-8 sm:my-16 lg:my-48 overflow-hidden">

            <section className="flex flex-col w-3/4 lg:w-[311px] mb-12 lg:mb-0">
                {/* Titles */}
                <h1 className="font-bold text-3xl sm:text-[40px]">Άρθρα</h1>
                <h2 className="sm:text-[22px] sm:leading-[26.63px] my-3 sm:my-8 lg:w-[311px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h2>
                {/* More Button */}
                <button
                    className="w-32 sm:w-[213px] h-12 sm:h-[65px] rounded-[10px] sm:text-lg font-bold bg-secondaryColor text-primaryColor hover:bg-primaryBgColor transition_all"
                    style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                >
                    Περισσότερα
                </button>
            </section>

            {/* Dark Gray Background*/}
            <span className="absolute bg-primaryBgColor w-11/12 lg:w-3/5 right-0 h-[480px] sm:h-[600px] lg:h-[693px] rounded-s-[58px] -z-30"></span>

            {/* Dynamic Slider Component */}
            <ImageSlider slides={slidesData} />

        </main>
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