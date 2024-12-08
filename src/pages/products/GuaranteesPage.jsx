// Components
import { Header, HeroProductsSection } from "@/components"
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

        </main>
    )
}