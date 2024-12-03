// Splide Library
import { Splide } from '@splidejs/react-splide';
import { SplideSlider } from '@/components';
import '@splidejs/react-splide/css';
// Images
import ArticleImg1 from '@/assets/images/forHome/article1.jpeg'
import ArticleImg2 from '@/assets/images/forHome/article2.jpeg'
import ArticleImg3 from '@/assets/images/forHome/article3.jpeg'

export const ArticlesSection = () => {
    return (
        <main className="flex justify-center gap-20 ml-32 items-center my-48">

            <section className="flex flex-col max-w-[311px]">
                {/* Titles */}
                <h1 className="font-bold text-[40px]">Άρθρα</h1>
                <h2 className="text-[22px] leading-[26.63px] my-8 w-[311px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h2>
                {/* More Button */}
                <button
                    className="w-[213px] h-[65px] rounded-[10px] text-lg font-bold bg-secondaryColor text-primaryColor hover:bg-primaryBgColor transition_all"
                    style={{ boxShadow: '0px 4px 4px 0px #00000026' }}
                >
                    Περισσότερα
                </button>
            </section>

            {/* Dark Gray Background*/}
            <span className="absolute bg-primaryBgColor w-3/5 right-0 h-[693px] rounded-s-[58px]"></span>

            {/* Splide Properties */}
            <Splide
                options={{
                    type: 'loop',
                    rewind: true,
                    rewindByDrag: true,
                    arrows: false,
                    pagination: true,
                    gap: '1rem',
                    perPage: 3,
                    breakpoints: {
                        768: { perPage: 1 }, // Display on mobile
                        1900: { perPage: 2 }, // Display on tablet
                    },
                }}
            >

                {/* Slide 1 */}
                <SplideSlider image={ArticleImg1}>
                    <h3 className="text-lg font-bold max-w-[446px] text-[28px]">Lorem ipsum dolor sit amet</h3>
                    <p className="text-sm max-w-[446px] text-[22px] font-semibold leading-[26.63px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                    <a href="#" className="text-secondaryColor underline">
                        Read More
                    </a>
                </SplideSlider>

                {/* Slide 2 */}
                <SplideSlider image={ArticleImg2}>
                    <h3 className="text-lg font-bold max-w-[446px] text-[28px]">Lorem ipsum dolor sit amet</h3>
                    <p className="text-sm max-w-[446px] text-[22px] font-semibold leading-[26.63px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                    <a href="#" className="text-secondaryColor underline">
                        Read More
                    </a>
                </SplideSlider>

                {/* Slide 3 */}
                <SplideSlider image={ArticleImg3}>
                    <h3 className="text-lg font-bold max-w-[446px] text-[28px]">Lorem ipsum dolor sit amet</h3>
                    <p className="text-sm max-w-[446px] text-[22px] font-semibold leading-[26.63px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                    <a href="#" className="text-secondaryColor underline">
                        Read More
                    </a>
                </SplideSlider>
            </Splide>

        </main>
    )
}