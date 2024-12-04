export const CircleGray = ({ children }) => {
    return (
        <span className="flex flex-col items-center gap-3 sm:gap-9">
            {/* Circle */}
            <span className="w-20 h-20 sm:w-[100px] sm:h-[100px] rounded-full bg-primaryBgColor"></span>
            {/* title */}
            <h3 className="text-sm sm:text-xl sm:leading-[24.2px] text-center font-bold text-primaryColor max-w-[130px] sm:max-w-[221px]">{children}</h3>
        </span>
    )
}