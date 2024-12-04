// Component
import { CircleDashed } from '@/components'
// Icons
import * as Icons from '@/utils/icons.util'

export const HowWorksSection = () => {
    return (
        <>
            <h1 className="text-center text-2xl lg:text-[40px] font-bold my-10 md:my-12">How it works</h1>
            <main className='flex flex-col md:flex-row items-start vsm:items-stretch max-w-[1202px] mx-20 vsm:mx-10 xl:m-auto'>
                <CircleDashed title="Πες μας που πας και πότε">
                    <Icons.BoostIcon />
                </CircleDashed>
                {/* Dashed Line */}
                <span className='w-0 h-10 mx-14 vsm:m-auto md:w-full md:h-0 border-[2px] border-secondaryColor border-dashed'></span>

                <CircleDashed title="Επέλεξε το πλάνο που σου ταιριάζει">
                    <Icons.QuestionIcon />
                </CircleDashed>
                {/* Dashed Line */}
                <span className='w-0 h-10 mx-14 vsm:m-auto md:w-full md:h-0 border-[2px] border-secondaryColor border-dashed'></span>

                <CircleDashed title="Πλήρωσε ηλεκτρονικά">
                    <Icons.SendIcon />
                </CircleDashed>
                {/* Dashed Line */}
                <span className='w-0 h-10 mx-14 vsm:m-auto md:w-full md:h-0 border-[2px] border-secondaryColor border-dashed'></span>

                <CircleDashed title="Πάρε το συμβόλαιο στη στιγμή">
                    <Icons.CashIcon />
                </CircleDashed>
            </main>
        </>
    )
}