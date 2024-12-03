export const CircleGray = ({ children }) => {
    return (
        <span className="flex flex-col items-center gap-9">
            {/* Circle */}
            <span className="w-[100px] h-[100px] rounded-full bg-primaryBgColor"></span>
            {/* title */}
            <h3 className="text-xl leading-[24.2px] text-center font-bold text-primaryColor max-w-[253px]">{children}</h3>
        </span>
    )
}