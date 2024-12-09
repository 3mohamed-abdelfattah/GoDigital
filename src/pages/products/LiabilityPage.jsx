// Components
import { Header, HeroProductsSection, CircleDashed } from "@/components"
// Icons
import * as Icons from "@/utils/icons.util"

export const LiabilityPage = () => {
    return (
        <main>
            <Header />
            <HeroProductsSection headTitle="Ασφάλιση Επαγγελματικής Ευθύνης Οδικού Μεταφορέα!" Subtitle="Εξασφαλίστε την εργασία σας ότι κι αν συμβεί … ψηφιακά και απλά!">
                <h3 className="text-sm sm:text-base lg:text-[22px] font-bold">Πες μας τον αριθμό εγγραφής του οχήματος σου και πάρε προσφορά!</h3>

                {/* Input section*/}
                <input placeholder="Αριθμός εγγραφής οχήματος" className="w-full max-w-[450px] xl:max-w-[680px] appearance-none h-14 md:h-[74px] bg-white border border-gray-300 text-sm vsm:text-base font-bold rounded-[10px] text-[#7D7D7D] py-2 px-4 pr-10 shadow focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </HeroProductsSection>

            {/* Circles Section */}
            <section className="mb-0 sm:mb-24">
                <h1 className="text-center text-2xl lg:text-[40px] font-bold my-10 sm:my-12">Πώς δουλεύει</h1>
                <article className="flex flex-col sm:flex-row items-start vsm:items-stretch max-w-[1202px] mx-20 vsm:mx-10 xl:m-auto">
                    <CircleDashed title="Δώσε τις αναγκαίες πληροφορίες">
                        <Icons.BoostIcon />
                    </CircleDashed>
                    {/* Dashed Line */}
                    <span className="w-0 h-10 mx-14 vsm:m-auto sm:w-full sm:h-0 border-[2px] border-secondaryColor border-dashed"></span>

                    <CircleDashed title="Δες το πλάνο σου">
                        <Icons.QuestionIcon />
                    </CircleDashed>
                    {/* Dashed Line */}
                    <span className="w-0 h-10 mx-14 vsm:m-auto sm:w-full sm:h-0 border-[2px] border-secondaryColor border-dashed"></span>

                    <CircleDashed title="Πλήρωσε ηλεκτρονικά">
                        <Icons.SendIcon />
                    </CircleDashed>
                    {/* Dashed Line */}
                    <span className="w-0 h-10 mx-14 vsm:m-auto sm:w-full sm:h-0 border-[2px] border-secondaryColor border-dashed"></span>

                    <CircleDashed title="Πάρε το συμβόλαιο στη στιγμή">
                        <Icons.CashIcon />
                    </CircleDashed>
                </article>
            </section>
        </main>
    )
}