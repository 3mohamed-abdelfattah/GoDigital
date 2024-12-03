import React from 'react'
// Component
import { CircleDashed } from '../custom/CircleDashed'
// Icons
import * as Icons from '@/utils/icons.util'

export const HowWorksSection = () => {
    return (
        <>
            <h1 className="text-center text-[40px] font-bold my-12">How it works</h1>
            <main className='flex items-center max-w-[1202px] m-auto'>
                <CircleDashed title="Πες μας που πας και πότε">
                    <Icons.BoostIcon />
                </CircleDashed>
                {/* Dashed Line */}
                <span className='w-full border-[2px] border-secondaryColor border-dashed'></span>

                <CircleDashed title="Επέλεξε το πλάνο που σου ταιριάζει">
                    <Icons.QuestionIcon />
                </CircleDashed>
                {/* Dashed Line */}
                <span className='w-full border-[2px] border-secondaryColor border-dashed'></span>

                <CircleDashed title="Πλήρωσε ηλεκτρονικά">
                    <Icons.SendIcon />
                </CircleDashed>
                {/* Dashed Line */}
                <span className='w-full border-[2px] border-secondaryColor border-dashed'></span>

                <CircleDashed title="Πάρε το συμβόλαιο στη στιγμή">
                    <Icons.CashIcon />
                </CircleDashed>
            </main>
        </>
    )
}