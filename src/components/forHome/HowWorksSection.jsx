// Component
import { CircleDashed } from "@/components"
// Icons
import * as Icons from "@/utils/icons.util"

export const HowWorksSection = () => {
    return (
        <main className="mb-0 sm:mb-24">
            <h1 data-aos="zoom-in" className="text-center text-2xl lg:text-[40px] font-bold my-10 sm:my-12">How it works</h1>
            <section data-aos="fade-right" className="flex flex-col sm:flex-row items-start vsm:items-stretch max-w-[1202px] mx-20 vsm:mx-10 xl:m-auto">
                <CircleDashed title="Δώσε τις αναγκαίες πληροφορίες">
                    <Icons.BoostIcon />
                </CircleDashed>
                {/* Dashed Line */}
                <span className="w-0 h-10 mx-14 vsm:m-auto sm:w-full sm:h-0 border-[2px] border-secondaryColor border-dashed"></span>

                <CircleDashed title="Δες τα διαθέσιμα πακέτα">
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
            </section>
        </main>
    )
}