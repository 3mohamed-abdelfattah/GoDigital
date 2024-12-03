// Icons
import * as Icons from '@/utils/icons.util'

export const PlaneLabel = ({ children }) => {
    return (
        <main
            className="flex flex-col justify-evenly items-center w-[224.57px] h-[315.12px] rounded-[154.84px] bg-secondaryColor"
            style={{ boxShadow: 'inset 0 4px 4px rgba(0, 0, 0, 0.2)' }}
        >
            <span className="flex justify-center items-center bg-secondaryBgColor rounded-full w-[147.63px] h-[147.63px]">
                <Icons.PlaneIcon />
            </span>
            {/* Label Text*/}
            <h3 className="max-w-[191px] font-bold text-lg leading-[24.59px] text-center py-2">{children}</h3>
        </main>
    )
}