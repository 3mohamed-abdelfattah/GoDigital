// Component
import { CircleGray } from "@/components"

export const WhyDigitalSection = () => {
    return (
        <main className="max-w-[1754px] xl:h-[615px] bg-secondaryColor rounded-3xl lg:rounded-[58px] text-center mt-10 md:mt-[139px] mx-7 lg:mx-20 p-5 vsm:p-8 lg:p-12">
            {/* Head Titles */}
            <h1 data-aos="zoom-in" className="text-primaryColor font-extrabold text-3xl sm:text-[40px]">Γιατί GoDigital;</h1>
            <h2 data-aos="zoom-in" className="max-w-[911px] mt-3 text-primaryColor font-medium text-xs tiny:text-lg sm:text-[22px] sm:leading-[30.05px] mx-auto">Στην Go Digital απλοποιούμε την ασφάλιση ψηφιακά και φέρνουμε στην οθόνη σας καινοτόμα προϊόντα που ικανοποιούν εξειδικευμένες ανάγκες!</h2>

            {/* Circles */}
            <section data-aos="fade-right" className="flex flex-wrap gap-2 vsm:gap-5 items-start justify-evenly mt-10 md:mt-[91px]">
                <CircleGray>Εύκολη Διαδικασία Προσφοράς & Αγοράς</CircleGray>
                <CircleGray>Καινοτόμα Προϊόντα</CircleGray>
                <CircleGray>Πλούσιες Καλύψεις</CircleGray>
                <CircleGray>Άμεση Έκδοση Συμβολαίου</CircleGray>
            </section>

            {/* Quote Button */}
            <button
                className="w-28 h-12 sm:w-[213px] sm:h-[65px] rounded-[10px] bg-primaryBgColor text-primaryColor text-xs tiny:text-base sm:text-lg font-bold mt-8 sm:mt-16 hover:bg-primaryColor hover:text-secondaryColor transition_all active:scale-110"
                style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                data-aos="zoom-in"
            >
                Get Quote
            </button>

        </main>
    )
}