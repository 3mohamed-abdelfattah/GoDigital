export const CircleDashed = ({ children, title }) => {
    return (
        <section className="relative flex flex-col justify-center items-center">
            {/* Circle & icon */}
            <span className="flex flex-shrink-0 justify-center items-center w-[167px] h-[167px] border-[3px] border-secondaryColor rounded-full">
                {children}
            </span>
            {/* title */}
            <p className="absolute -bottom-[71px] font-semibold text-xl leading-6 text-center text-secondaryColor w-[203px]">{title}</p>
        </section>
    )
}