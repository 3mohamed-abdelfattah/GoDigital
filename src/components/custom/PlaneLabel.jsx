// Icons
import * as Icons from '@/utils/icons.util'

export const PlaneLabel = ({ children, rotateBox, rotateText, hight = 'h-[190px]' }) => {
    return (
        <main
            className={`${rotateBox} vsm:transform-none flex flex-col justify-evenly items-center w-[117.09px] md:w-[224.57px] ${hight} vsm:h-[184.31px] md:h-[315.12px] rounded-[154.84px] bg-secondaryColor`}
            style={{ boxShadow: 'inset 0 4px 4px rgba(0, 0, 0, 0.2)' }}
        >
            <span className={`${rotateText} vsm:transform-none flex justify-center items-center bg-secondaryBgColor rounded-full w-[76.98px] md:w-[147.63px] h-[76.98px] md:h-[147.63px]`}>
                <Icons.PlaneIcon />
            </span>
            {/* Label Text*/}
            <h3 className={`${rotateText} vsm:transform-none max-w-[191px] font-bold text-xs md:text-lg md:leading-[24.59px] text-center py-2`}>{children}</h3>
        </main>
    )
}