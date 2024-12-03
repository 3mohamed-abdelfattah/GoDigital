// Icons
import * as Icons from '@/utils/icons.util'

export const SuccessRectangle = ({ children = 'Add your text' }) => {
    return (
        <main
            className="flex flex-col justify-evenly gap-6 items-center w-[278px] h-[160px] bg-white p-[26px] rounded-[20px]"
            style={{ boxShadow: ' 0px 2px 4px 0px #00000026 inset' }}
        >
            <div><Icons.SuccessIcon /></div>
            <h3 className="text-lg font-semibold leading-[24.59px] text-center">{children}</h3>
        </main>
    )
}