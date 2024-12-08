// Components
import { Header, HeroProductsSection } from "@/components"

export const ForeignersPage = () => {
    return (
        <main>
            <Header />
            <HeroProductsSection headTitle="Ιατροφαρμακευτική Ασφάλιση Αλλοδαπών … ψηφιακά απλή!" Subtitle="Εξασφαλίστε τις πιο αναγκαίες καλύψεις για την υγεία σας !">
                <h3 className="text-sm sm:text-base lg:text-[22px] font-bold">Έτοιμοι; Γράψε την ταυτότητα σου και πάρε προσφορά!</h3>

                {/* Input section*/}
                <input placeholder="Ταυτότητα" className="w-full max-w-[450px] xl:max-w-[680px] appearance-none h-14 md:h-[74px] bg-white border border-gray-300 text-sm vsm:text-base font-bold rounded-[10px] text-[#7D7D7D] py-2 px-4 pr-10 shadow focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </HeroProductsSection>

        </main>
    )
}