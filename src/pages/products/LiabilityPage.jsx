// Components
import { Header, HeroProductsSection } from "@/components"

export const LiabilityPage = () => {
    return (
        <main>
            <Header />
            <HeroProductsSection headTitle="Ασφάλιση Επαγγελματικής Ευθύνης Οδικού Μεταφορέα!" Subtitle="Εξασφαλίστε την εργασία σας ότι κι αν συμβεί … ψηφιακά και απλά!">
                <h3 className="text-sm sm:text-base lg:text-[22px] font-bold">Πες μας τον αριθμό εγγραφής του οχήματος σου και πάρε προσφορά!</h3>

                {/* Input section*/}
                <input placeholder="Αριθμός εγγραφής οχήματος" className="w-full max-w-[450px] xl:max-w-[680px] appearance-none h-14 md:h-[74px] bg-white border border-gray-300 text-sm vsm:text-base font-bold rounded-[10px] text-[#7D7D7D] py-2 px-4 pr-10 shadow focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </HeroProductsSection>

        </main>
    )
}