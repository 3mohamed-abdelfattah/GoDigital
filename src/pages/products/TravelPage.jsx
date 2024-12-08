// Components
import { Header, HeroProductsSection } from "@/components"
// Icons
import * as Icons from "@/utils/icons.util"

export const TravelPage = () => {
    return (
        <main>
            <Header />
            <HeroProductsSection headTitle="Ταξιδιωτική Ασφάλιση … ψηφιακά απλή!" Subtitle="Η ταξιδιωτική ασφάλιση επιτέλους πιο απλή από ποτέ!">
                <span>
                    <h3 className="text-sm vsm:text-base lg:text-[22px] font-bold">Που ταξιδεύεις;</h3>
                    <h4 className="text-sm vsm:text-base lg:text-[22px]">Πες μας τον προορισμό σου και πάρε προσφορά!</h4>
                </span>

                {/* Select Input section*/}
                <div className="relative w-full max-w-[450px] xl:max-w-[680px]">
                    <select defaultValue="" className="w-full appearance-none h-14 md:h-[74px] bg-white border border-gray-300 text-sm vsm:text-base font-bold rounded-[10px] text-[#7D7D7D] py-2 px-4 pr-10 shadow focus:outline-none focus:ring-2 focus:ring-orange-400">
                        <option value="" disabled hidden>
                            Country
                        </option>
                        <option value="1">Greece</option>
                        <option value="2">Egypt</option>
                        <option value="3">France</option>
                        {/* Add more options */}
                    </select>
                    <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                        <Icons.SelectArrowIcon />
                    </span>
                </div>
            </HeroProductsSection>

        </main>
    )
}