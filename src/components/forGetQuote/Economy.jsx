import { Fragment, useState } from 'react';
// Components
import { Model } from "@/components";
// Icons
import * as iconsUtil from "@/utils/icons.util";

export const Economy = ({ id, show, setShow, background = "white", handleSubmit }) => {
    const [modalDetails, setModalDetails] = useState({ show: false, icon: null, title: '', description: '' });

    // Toggle the visibility of full Economy options
    const handleShow = () => {
        setShow((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    // Open modal with icon details
    const handleIconClick = (icon, title, description) => {
        if (!show) return;
        setModalDetails({ show: true, icon, title, description });
    };

    // Close modal
    const handleCloseModal = () => {
        setModalDetails({ show: false, icon: null, title: '', description: '' });
    };

    return (
        <section
            className={`bg-${background} w-full overflow-hidden rounded-t-[15px] cursor-pointer transition-all`}
            style={{ boxShadow: "0px -2px 4px 0px rgba(65, 72, 225, 0.15)" }}
            onClick={handleShow}
        >
            <header className="w-full flex justify-between px-10 items-center vsm:text-xl font-semibold text-secondaryColor pt-7 pb-5">
                <h1>Economy</h1>
                <p>Total €19.00</p>
            </header>
            <hr className="border border-[#FACABC] mx-5" />

            {show && <p className="text-center text-[9px] vsm:text-sm p-1">Click on each icon to learn more about the cover</p>}

            {/* Row 1 */}
            <div className="flex justify-around items-center p-5">
                <div className="flex flex-col justify-center gap-4 items-center text-sm vsm:text-lg text-center w-20 vsm:w-auto vsm:max-w-[133px]" onClick={() => handleIconClick(<iconsUtil.CancellationIcon />, 'Cancellation', 'Details about Cancellation cover.')}>
                    <iconsUtil.CancellationIcon />
                    <p className="flex flex-col justify-center items-center">
                        Cancellation
                        <span className="font-medium">2500€</span>
                    </p>
                </div>
                <div className="flex flex-col justify-center gap-4 items-center text-sm vsm:text-lg text-center w-20 vsm:w-auto vsm:max-w-[133px]" onClick={() => handleIconClick(<iconsUtil.MedicIcon />, 'Medical', 'Here is the explanationHere is the explanationHere is the explanationHere is the explanationHere is the explanationHere is the explanationHere is the explanationHere is the explanationHere is the explanationHere is the explanation')}>
                    <iconsUtil.MedicIcon />
                    <p className="flex flex-col justify-center items-center">
                        Medical
                        <span className="font-medium">195€</span>
                    </p>
                </div>
                <div className="flex flex-col justify-center gap-4 items-center text-sm vsm:text-lg text-center w-20 vsm:w-auto vsm:max-w-[133px]" onClick={() => handleIconClick(<iconsUtil.BaggageIcon />, 'Baggage', 'Details about Baggage cover.')}>
                    <iconsUtil.BaggageIcon />
                    <p className="flex flex-col justify-center items-center">
                        Baggage
                        <span className="font-medium">195€</span>
                    </p>
                </div>
            </div>

            {show && (
                <Fragment>
                    {/* Row 2 */}
                    <div className="flex justify-around items-center p-5">
                        <div className="flex flex-col justify-center gap-4 items-center text-sm vsm:text-lg text-center w-20 vsm:w-auto vsm:max-w-[133px]" onClick={() => handleIconClick(<iconsUtil.PersonalAccidentIcon />, 'Personal Accident', 'Details about Personal Accident cover.')}>
                            <iconsUtil.PersonalAccidentIcon />
                            <p className="flex flex-col justify-center items-center">
                                Personal Accident
                                <span className="font-medium">2500€</span>
                            </p>
                        </div>
                        <div className="flex flex-col justify-center gap-4 items-center text-sm vsm:text-lg text-center w-20 vsm:w-auto vsm:max-w-[133px]" onClick={() => handleIconClick(<iconsUtil.TravelDelayIcon />, 'Travel Delay', 'Details about Travel Delay cover.')}>
                            <iconsUtil.TravelDelayIcon />
                            <p className="flex flex-col justify-center items-center">
                                Travel Delay Up to
                                <span className="font-medium">195€</span>
                            </p>
                        </div>
                        <div className="flex flex-col justify-center gap-4 items-center text-sm vsm:text-lg text-center w-20 vsm:w-auto vsm:max-w-[133px]" onClick={() => handleIconClick(<iconsUtil.PersonalPossessionsIcon />, 'Personal Possessions', 'Details about Personal Possessions cover.')}>
                            <iconsUtil.PersonalPossessionsIcon />
                            <p className="flex flex-col justify-center items-center">
                                Personal Possessions
                                <span className="font-medium">195€</span>
                            </p>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex justify-around items-center p-5">
                        <div className="flex flex-col justify-center gap-4 items-center text-sm vsm:text-lg text-center w-28 vsm:w-auto vsm:max-w-[133px]" onClick={() => handleIconClick(<iconsUtil.PersonalMoneyIcon />, 'Personal Money', 'Details about Personal Money cover.')}>
                            <iconsUtil.PersonalMoneyIcon />
                            <p className="flex flex-col justify-center items-center">
                                Personal Money
                                <span className="font-medium">2500€</span>
                            </p>
                        </div>
                        <div className="flex flex-col justify-center gap-4 items-center text-sm vsm:text-lg text-center w-28 vsm:w-auto vsm:max-w-[133px]" onClick={() => handleIconClick(<iconsUtil.PersonalLiabilityIcon />, 'Personal Liability', 'Details about Personal Liability cover.')}>
                            <iconsUtil.PersonalLiabilityIcon />
                            <p className="flex flex-col justify-center items-center">
                                Personal Liability
                                <span className="font-medium">195€</span>
                            </p>
                        </div>
                        <div className="flex flex-col justify-center gap-4 items-center text-sm vsm:text-lg text-center w-28 vsm:w-auto vsm:max-w-[133px]" onClick={() => handleIconClick(<iconsUtil.LegalExpensesIcon />, 'Legal Expenses', 'Details about Legal Expenses cover.')}>
                            <iconsUtil.LegalExpensesIcon />
                            <p className="flex flex-col justify-center items-center">
                                Legal Expenses up to
                                <span className="font-medium">195€</span>
                            </p>
                        </div>
                    </div>

                    {/* Next Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleSubmit}
                            className="group flex items-center justify-between bg-white w-4/5 my-5 px-5 pl-8 h-12 sm:h-14 text-sm vsm:text-base font-medium border rounded-[27.5px] shadow-md transition-all text-black"
                        >
                            Next
                            <span className="flex justify-center items-center bg-secondaryColor w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-transform group-hover:rotate-45">
                                <iconsUtil.QuoteArrowIcon />
                            </span>
                        </button>
                    </div>
                </Fragment>
            )}


            {/* Modal for displaying detailed information */}
            <Model
                show={modalDetails.show}
                onClose={handleCloseModal}
                icon={modalDetails.icon}
                title={modalDetails.title}
                description={modalDetails.description}
            />
        </section>
    );
};