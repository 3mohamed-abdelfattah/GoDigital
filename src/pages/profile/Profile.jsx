// Components
import { Header } from '@/components'
// Images
import Symbol from "@/assets/images/icon.png"

// Styles for all inputs
const styles = {
    inputStyle: 'outline-none w-80 md:w-96 vsm:h-14 p-2 vsm:p-3 rounded-lg border border-primaryColor bg-transparent'
}

export const Profile = () => {
    return (
        <>
            <Header />

            <section
                className="flex flex-col justify-center items-center bg-primaryBgColor text-center m-6 lg:mx-20 rounded-3xl md:rounded-[58px] text-primaryColor py-6 md:py-12"
                style={{ boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)" }}
            >
                {/* Hero Section Logo */}
                <img src={Symbol} alt="Go Digital Icon" className="w-[100px] md:w-[199px]" />
                {/* User Name */}
                <h1 className="max-w-[806px] mx-5 tiny:text-2xl vsm:text-4xl md:text-5xl font-semibold vsm:leading-[51.96px] md:leading-[81.96px]">Mohamed Mohamed</h1>

                {/* Inputs Fields */}
                <span className='flex flex-col gap-5 my-5'>
                    <input type='email' defaultValue='mohamed.devmaster@gmail.com' className={styles.inputStyle} />
                    <input type='text' defaultValue='01101201745' className={styles.inputStyle} />
                    <input type='password' defaultValue='********' className={styles.inputStyle} />
                </span>

                {/* CONTRACTS Button */}
                <button
                    className="w-36 h-12 sm:w-[213px] sm:h-[65px] rounded-[10px] hover:bg-primaryColor hover:text-secondaryColor text-xs tiny:text-base sm:text-lg font-bold mt-8 bg-secondaryColor transition_all active:scale-110"
                    style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                >
                    ΣΥΜΒΟΛΑΙΑ
                </button>
            </section>
        </ >
    )
}