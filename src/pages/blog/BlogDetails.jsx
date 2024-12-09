import { Link, useParams } from "react-router-dom";
// Component
import { Header } from "@/components";
// Icons
import * as Icons from "@/utils/icons.util"
// Images
import Symbol from "@/assets/images/icon.png"
import ArticleImg1 from "@/assets/images/forHome/article1.jpeg"
import ArticleImg2 from "@/assets/images/forHome/article2.jpeg"
import ArticleImg3 from "@/assets/images/forHome/article3.jpeg"

export const BlogDetails = () => {
    const { id } = useParams(); // to get id
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="bg-secondaryColor mx-6 lg:mx-20 rounded-3xl md:rounded-[58px]">
                {/* First Hero Section [Logo & Titles] */}
                <span
                    className="flex flex-col justify-center items-center bg-primaryBgColor text-center rounded-3xl md:rounded-[58px] text-primaryColor py-6 md:py-12 md:max-h-[590px]"
                    style={{ boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)" }}
                >
                    {/* Hero Section Logo */}
                    <img src={Symbol} alt="Go Digital Icon" className="w-[100px] md:w-[199px]" />
                    {/* Hero Section Title */}
                    <h1 className="max-w-[806px] mx-5 tiny:text-2xl vsm:text-4xl md:text-6xl font-semibold vsm:leading-[51.96px] md:leading-[81.96px]">Our Blog</h1>
                </span>

                {/* Travel Insurance */}
                <span className="flex justify-center items-center gap-10 rounded-3xl md:rounded-[58px] py-4 md:py-8 mx-5 md:mx-20 text-primaryColor">
                    <span className="flex flex-col justify-center items-center gap-4 md:gap-7">
                        <Icons.PlaneIcon />
                        <h3 className="font-bold md:text-3xl text-center">Travel Insurance</h3>
                    </span>
                </span>
            </section>


            {/* Articles Details Section */}
            <section className="flex flex-wrap justify-center gap-5 m-7">
                {slidesData.map((slide) => (
                    <div
                        className="relative rounded-3xl sm:rounded-[32px] w-96 h-96 sm:w-[460px] sm:h-[450px] overflow-hidden shadow-lg m-2"
                        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                        key={slide.id}
                    >
                        {/* image */}
                        <img
                            className="rounded-3xl sm:rounded-[32px] w-96 h-96 sm:w-[510px] sm:h-[500px] object-cover"
                            src={slide.imgSrc}
                            alt="About Image"
                        />
                        {/* gradient white color */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent rounded-3xl sm:rounded-[32px]">
                            <span className="absolute flex flex-col gap-3 bottom-4 left-4 text-black">
                                <h3 className="text-lg font-bold max-w-[446px] text-[28px]">{slide.title}</h3>
                                <p className="text-sm max-w-[446px] text-[22px] font-semibold leading-[26.63px]">
                                    {slide.subTitle}
                                </p>
                                <Link to={slide.readMoreUrl} className="text-secondaryColor underline">
                                    Read More
                                </Link>
                            </span>
                        </div>
                    </div>
                ))}
            </section>

            {/* Travel Insurance Section */}
            <section
                className="flex flex-col-reverse md:flex-row justify-center md:justify-evenly items-center bg-secondaryColor text-center md:text-left rounded-3xl p-5 mx-6 lg:mx-20 md:rounded-[58px] text-primaryColor py-6 md:py-12 xl:h-[590px]"
                style={{ boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)" }}
            >

                <aside className="flex flex-col justify-center items-center md:items-start md:justify-around h-full">
                    {/* Head Titles */}
                    <span>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold max-w-[774px]">Travel Insurance</h1>
                        <h2 className="text-sm sm:text-xl lg:text-[22px] max-w-[572px] mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    </span>
                    {/* Quote ,More Info */}
                    <aside className="flex flex-col justify-center items-center md:justify-stretch md:items-start gap-5 mt-8 xl:mt-0">

                        <ul className="flex flex-col gap-1 list-disc text-sm sm:text-xl lg:text-[22px]">
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>adipiscing elit, sed do eiusmod tempor</li>
                            <li>incididunt ut labore et dolore magna aliqua.</li>
                        </ul>

                        {/* Quote Button */}
                        <span className="flex gap-5">
                            <button
                                className="w-28 h-12 sm:w-[213px] sm:h-[65px] rounded-[10px] bg-primaryBgColor text-primaryColor text-xs tiny:text-sm vsm:text-base sm:text-lg font-bold hover:bg-primaryColor hover:text-secondaryColor transition_all active:scale-110"
                                style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                            >
                                Get Quote
                            </button>

                            {/* More Info Button */}
                            <button
                                className="w-28 h-12 sm:w-[213px] sm:h-[65px] rounded-[10px] bg-primaryBgColor text-primaryColor text-xs tiny:text-sm vsm:text-base sm:text-lg font-bold hover:bg-primaryColor hover:text-secondaryColor transition_all active:scale-110"
                                style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                            >
                                More Info
                            </button>
                        </span>
                    </aside>
                </aside>

                {/* AirPlane Icon */}
                <span className="p-5">
                    <Icons.AirPlaneIcon />
                </span>
            </section>
        </>
    )
}

// Data Will Come From API
const slidesData = [
    {
        id: 1,
        imgSrc: ArticleImg1,
        title: "Lorem ipsum dolor sit amet",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        readMoreUrl: "/details/1",
    },
    {
        id: 2,
        imgSrc: ArticleImg2,
        title: "Lorem ipsum dolor sit amet",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        readMoreUrl: "/details/2",
    },
    {
        id: 3,
        imgSrc: ArticleImg3,
        title: "Lorem ipsum dolor sit amet",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        readMoreUrl: "/details/3",
    },
    {
        id: 4,
        imgSrc: ArticleImg1,
        title: "Lorem ipsum dolor sit amet",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        readMoreUrl: "/details/4",
    },
    {
        id: 5,
        imgSrc: ArticleImg2,
        title: "Lorem ipsum dolor sit amet",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        readMoreUrl: "/details/5",
    },
    {
        id: 6,
        imgSrc: ArticleImg3,
        title: "Lorem ipsum dolor sit amet",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        readMoreUrl: "/details/6",
    },
];