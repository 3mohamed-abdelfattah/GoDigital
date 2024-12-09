// Components
import { Header, HeroProductsSection, CircleDashed } from "@/components"
// Icons
import * as Icons from "@/utils/icons.util"

export const GuaranteesPage = () => {
    return (
        <main>
            <Header />
            <HeroProductsSection headTitle="Ασφάλιση Εγγυήσεων … ψηφιακά απλά!" Subtitle="Εξασφαλίστε την εγγυητική επιστολή που χρειάζεστε χωρίς δέσμευση κεφαλαίων!">
                <h3 className="text-sm sm:text-base lg:text-[22px] font-bold">Διάλεξε τον τύπο εγγύησης για να ξεκινήσεις τη διαδικασία προσφοράς!</h3>

                {/* Select Input section*/}
                <div className="relative w-full max-w-[450px] xl:max-w-[680px]">
                    <select defaultValue="" className="w-full appearance-none h-14 md:h-[74px] bg-white border border-gray-300 text-sm vsm:text-base font-bold rounded-[10px] text-[#7D7D7D] py-2 px-4 pr-10 shadow focus:outline-none focus:ring-2 focus:ring-orange-400">
                        <option value="" disabled hidden>
                            Εγγύσηση
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        {/* Add more options */}
                    </select>
                    <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                        <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                            <Icons.SelectArrowIcon />
                        </span>
                    </span>
                </div>
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

                    <CircleDashed title="Συμπλήρωσε τα στοιχεία σου">
                        <Icons.QuestionIcon />
                    </CircleDashed>
                    {/* Dashed Line */}
                    <span className="w-0 h-10 mx-14 vsm:m-auto sm:w-full sm:h-0 border-[2px] border-secondaryColor border-dashed"></span>

                    <CircleDashed title="Πάρε την προσφορά στο email σου σε λίγες ημέρες">
                        <Icons.SendIcon />
                    </CircleDashed>
                </article>
            </section>

        </main>
    )
}