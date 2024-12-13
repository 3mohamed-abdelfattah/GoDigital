// Components
import { Header } from '@/components'
// Images
import Symbol from "@/assets/images/icon.png"

// Styles for all inputs
const styles = {
    buttonStyle: 'w-full h-14 vsm:h-16 rounded-[10px] border-2 border-secondaryColor bg-primaryColor text-secondaryColor text-xs tiny:text-base sm:text-lg font-bold transition_all active:scale-110'
}

export const ProfileContracts = () => {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section
                className="flex flex-col justify-center items-center bg-primaryBgColor text-center m-6 lg:mx-20 rounded-3xl md:rounded-[58px] text-primaryColor py-6 md:py-12"
                style={{ boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)" }}
            >
                {/* Hero Section Logo */}
                <img data-aos="fade-in" src={Symbol} alt="Go Digital Icon" className="w-[100px] md:w-[199px]" />
                {/* User Name */}
                <h1 className="max-w-[806px] mx-5 tiny:text-2xl vsm:text-4xl md:text-5xl font-semibold vsm:leading-[51.96px] md:leading-[81.96px]">Mohamed Mohamed</h1>
            </section>

            <section className='flex justify-center gap-3 vsm:gap-5 items-center m-6 lg:mx-20'>
                <button className="w-full h-14 sm:h-[65px] rounded-[10px] text-xs tiny:text-base sm:text-lg font-bold mt-5 bg-secondaryColor text-primaryColor transition_all active:scale-105">ΕΝΕΡΓΑ ΣΥΜΒΟΛΑΙΑ</button>
                <button className="w-full h-14 sm:h-[65px] rounded-[10px] text-xs tiny:text-base sm:text-lg font-bold mt-5 bg-[#C3C3C3] text-primaryColor transition_all active:scale-105">ΑΝΕΝΕΡΓΑ ΣΥΜΒΟΛΑΙΑ</button>
            </section>

            {/* Button Product Section */}
            <section className='flex flex-col justify-center items-center gap-5 my-5 m-6 lg:mx-20'>
                <button className={styles.buttonStyle}>Travel</button>
                <button className={styles.buttonStyle}>Ευθύνης Ασφαλιστικών Διαμεσολαβητών</button>
                <button className={styles.buttonStyle}>Ευθύνης Ασφαλιστικών Διαμεσολαβητών</button>
                <button className={styles.buttonStyle}>Ευθύνης Ασφαλιστικών Διαμεσολαβητών</button>
                <button className={styles.buttonStyle}>Ευθύνης Ασφαλιστικών Διαμεσολαβητών</button>
                {/* CONTRACTS Button */}
                <button
                    className="w-44 h-12 sm:w-[213px] sm:h-[65px] rounded-[10px] text-xs tiny:text-base sm:text-lg font-bold mt-5 border-2 border-secondaryColor bg-primaryColor text-secondaryColor transition_all active:scale-110"
                    style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                >
                    ΣΥΜΒΟΛΑΙΑ
                </button>
            </section>
        </ >
    )
}