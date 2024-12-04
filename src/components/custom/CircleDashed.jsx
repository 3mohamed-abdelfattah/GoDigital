export const CircleDashed = ({ children, title }) => {
    return (
        <section className="relative flex flex-col justify-center items-center vsm:mx-auto">
            {/* Circle & icon */}
            <span className="flex flex-shrink-0 justify-center items-center w-28 h-28 lg:w-[167px] lg:h-[167px] border-[3px] border-secondaryColor rounded-full">
                {children}
            </span>
            {/* title */}
            <p className="absolute left-32 sm:left-auto sm:-bottom-[71px] font-semibold lg:text-xl leading-6 text-center text-secondaryColor w-28 sm:w-40 lg:w-[203px]">{title}</p>
        </section>
    )
}