// Icons
import * as Icons from "@/utils/icons.util";

export const Economy = ({ id, show, setShow, background = "white" }) => {

    // Show Full Economy options when clicked
    const handleShow = () => {
        setShow((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <article
            className={`bg-${background} w-full overflow-hidden rounded-t-[15px]`}
            style={{ boxShadow: "0px -2px 4px 0px rgba(65, 72, 225, 0.15)" }}
            onClick={handleShow}
        >
            <span className="w-full flex justify-between px-10 items-center text-xl font-semibold text-secondaryColor pt-7 pb-5">
                <p>Economy</p>
                <p>Total €19.00</p>
            </span>
            <hr className="border border-[#FACABC] mx-5" />

            {show && <p className="text-center text-sm p-1">Click on each icon to learn more about the cover</p>}

            {/* row 1 */}
            <div className="flex justify-around items-center p-5">
                <span className="flex flex-col justify-center gap-4 items-center text-lg text-center max-w-[133px]">
                    <Icons.CancellationIcon />
                    <p className="flex flex-col justify-center items-center">
                        Cancellation
                        <span className="font-medium">2500€</span>
                    </p>
                </span>
                <span className="flex flex-col justify-center gap-4 items-center text-lg text-center max-w-[133px]">
                    <Icons.MedicIcon />
                    <p className="flex flex-col justify-center items-center">
                        Medical
                        <span className="font-medium">195€</span>
                    </p>
                </span>
                <span className="flex flex-col justify-center gap-4 items-center text-lg text-center max-w-[133px]">
                    <Icons.BaggageIcon />
                    <p className="flex flex-col justify-center items-center">
                        Baggage
                        <span className="font-medium">195€</span>
                    </p>
                </span>
            </div>

            {show && (
                <>
                    {/* row 2 */}
                    <div className="flex justify-around items-center p-5">
                        <span className="flex flex-col justify-center gap-4 items-center text-lg text-center max-w-[133px]">
                            <Icons.PersonalAccidentIcon />
                            <p className="flex flex-col justify-center items-center">
                                Personal Accident
                                <span className="font-medium">2500€</span>
                            </p>
                        </span>
                        <span className="flex flex-col justify-center gap-4 items-center text-lg text-center max-w-[133px]">
                            <Icons.TravelDelayIcon />
                            <p className="flex flex-col justify-center items.center">
                                Travel Delay Up to
                                <span className="font.medium">195€</span>
                            </p>
                        </span>
                        <span className="flex flex-col justify-center gap-4 items-center text-lg text-center max-w-[133px]">
                            <Icons.PersonalPossessionsIcon />
                            <p className="flex flex-col justify-center items-center">
                                Personal Possessions
                                <span className="font-medium">195€</span>
                            </p>
                        </span>
                    </div>

                    {/* row 3 */}
                    <div className="flex justify-around items-center p-5">
                        <span className="flex flex-col justify-center gap-4 items-center text-lg text-center max-w-[133px]">
                            <Icons.PersonalMoneyIcon />
                            <p className="flex flex-col justify-center items-center">
                                Personal Money
                                <span className="font-medium">2500€</span>
                            </p>
                        </span>
                        <span className="flex flex-col justify-center gap-4 items-center text-lg text-center max-w-[133px]">
                            <Icons.PersonalLiabilityIcon />
                            <p className="flex flex-col justify-center items-center">
                                Personal Liability
                                <span className="font-medium">195€</span>
                            </p>
                        </span>
                        <span className="flex flex-col justify-center gap-4 items-center text-lg text-center max-w-[133px]">
                            <Icons.LegalExpensesIcon />
                            <p className="flex flex-col justify-center items-center">
                                Legal Expenses up to
                                <span className="font-medium">195€</span>
                            </p>
                        </span>
                    </div>
                </>
            )}
        </article>
    )
}