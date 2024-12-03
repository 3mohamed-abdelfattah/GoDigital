// Component
import { CircleGray } from '@/components'

export const WhyDigitalSection = () => {
    return (
        <main className="max-w-[1754px] h-[615px] bg-secondaryColor rounded-[58px] text-center mt-[139px] mx-20 p-12">
            {/* Head Titles */}
            <h1 className="text-primaryColor font-extrabold text-[40px]">Γιατί GoDigital;</h1>
            <h2 className="max-w-[911px] mt-2 text-primaryColor font-medium text-[22px] leading-[30.05px] mx-auto">Στην Go Digital απλοποιούμε την ασφάλιση ψηφιακά και φέρνουμε στην οθόνη σας τις καλύτερες επιλογές ταξιδιωτικής ασφάλισης.</h2>

            {/* Circles */}
            <section className="flex items-center justify-evenly mt-[91px]">
                <CircleGray>Εύκολη Διαδικασία Αγοράς</CircleGray>
                <CircleGray>Διαφορετικές Επιλογές</CircleGray>
                <CircleGray>Άμεση Έκδοση Συμβολαίου</CircleGray>
                <CircleGray>24/7 Εξυπηρέτηση σε όλο τον κόσμο</CircleGray>
            </section>

            {/* Quote Button */}
            <button
                className="transition w-[213px] h-[65px] rounded-[10px] bg-primaryBgColor text-primaryColor text-lg font-bold mt-16 hover:bg-primaryColor hover:text-secondaryColor"
                style={{ boxShadow: '0px 4px 4px 0px #00000026' }}
            >
                Get Quote
            </button>

        </main>
    )
}