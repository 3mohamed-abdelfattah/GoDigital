export const CircleGray = ({ children, circleColor = "primaryBgColor", textColor = "primaryColor" }) => {
    return (
        <span className="flex flex-col items-center tiny:gap-3 sm:gap-9">
            {/* Circle */}
            <span className={`m-1 w-12 h-12 tiny:w-20 tiny:h-20 sm:w-[100px] sm:h-[100px] rounded-full bg-${circleColor}`}></span>
            {/* title */}
            <h3 data-aos="zoom-in" className={`text-xs tiny:text-xs sm:text-xl sm:leading-[24.2px] text-center font-bold text-${textColor} w-[221px]`}>{children}</h3>
        </span>
    )
}