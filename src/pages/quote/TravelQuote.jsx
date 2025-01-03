import { Fragment, useState } from "react";
// Components
import { QuoteHeader, Economy } from "@/components";
// Icons
import * as Icons from "@/utils/icons.util";

export const TravelQuote = () => {
    const totalSteps = 5; // Total number of steps (including price selection as the final step)
    const [currentStep, setCurrentStep] = useState(0); // Current active step
    const [isInvalid, setIsInvalid] = useState(false); // Track invalid inputs
    const [showEconomy, setShowEconomy] = useState({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
    });
    const locations = ["New York", "Los Angeles", "Chicago", "London", "Tokyo"]; // Example locations
    const [userData, setUserData] = useState({
        step1: { departure: "", arrival: "" },
        step2: { startDate: "", endDate: "" },
        step3: { preference: "" },
        step4: { phone: "" },
        step5: { priceOption: "" }, // Add new step data for price selection
    });

    // Handle input change for specific fields in each step
    const handleInputChange = (step, field, value) => {
        setIsInvalid(false);
        setUserData((prevData) => ({
            ...prevData,
            [step]: { ...prevData[step], [field]: value },
        }));
    };

    // Validate input for the current step
    const isStepValid = (step) => {
        const stepData = userData[`step${step + 1}`];
        return Object.values(stepData).every((value) => value.trim() !== "");
    };

    // Proceed to the next step after validation
    const handleNext = () => {
        if (isStepValid(currentStep)) {
            setCurrentStep((prev) => prev + 1);
            setIsInvalid(false);
        } else {
            setIsInvalid(true);
        }
    };

    // Return to the previous step
    const handlePrevious = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
        setIsInvalid(false);
    };

    // Submit the data (API integration placeholder)
    const handleSubmit = () => {
        console.log("User Data:", userData);
        // Add API call
    };

    return (
        <main>
            {/* Header */}
            <QuoteHeader />

            {/* Progress Bar */}
            <section className="Inter_font border-t-2 mx-5 md:mx-0 my-2 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center my-10">
                    <div className="flex items-center gap-3 relative w-full">
                        {/* Progress Bar Steps */}
                        {Array.from({ length: totalSteps - 1 }).map((_, index) => (
                            <div
                                key={index}
                                className={`w-14 vsm:w-20 sm:w-32 md:w-[170px] lg:w-[214px] h-[15px] rounded-[5px]
                    ${index < currentStep ? "bg-orange-400" : "bg-gray-300"}
                    ${index === currentStep ? "ml-[70px] md:ml-16" : ""}`}
                            ></div>
                        ))}
                        {/* Plane Icon with Animation */}
                        <span
                            className={`${currentStep < 4 ? 'absolute' : ''} transition_all`}
                            style={{
                                left: `calc(${currentStep * 23.5}%)`, // Adjusts plane's position dynamically based on the current step
                            }}
                        >
                            <Icons.QuotePlaneIcon />
                        </span>
                    </div>
                </div>

                {/* Step Forms */}
                <div className={`${currentStep == 4 ? "my-0" : "my-14"} flex flex-wrap justify-center items-center gap-5`}>
                    {/* Step 1 */}
                    {currentStep === 0 && (
                        <Fragment>
                            <TravelSelect
                                placeholder="Where are you travelling from?"
                                value={userData.step1.departure}
                                onChange={(e) =>
                                    handleInputChange("step1", "departure", e.target.value)
                                }
                                isInvalid={isInvalid && !userData.step1.departure}
                                options={locations}
                            />
                            <TravelSelect
                                placeholder="Where are you travelling to?"
                                value={userData.step1.arrival}
                                onChange={(e) =>
                                    handleInputChange("step1", "arrival", e.target.value)
                                }
                                isInvalid={isInvalid && !userData.step1.arrival}
                                options={locations}
                            />
                        </Fragment>
                    )}

                    {/* Step 2 */}
                    {currentStep === 1 && (
                        <div className="flex flex-col justify-center items-center gap-10">
                            <Icons.QuoteDurationIcon />
                            <h1 className="max-w-[683px] text-2xl sm:text-4xl text-center font-semibold">Trip Duration:</h1>
                            <span className="flex flex-wrap justify-center gap-5">
                                <TravelInput
                                    type="date"
                                    placeholder="Trip Start Date"
                                    value={userData.step2.startDate}
                                    onChange={(e) =>
                                        handleInputChange("step2", "startDate", e.target.value)
                                    }
                                    isInvalid={isInvalid && !userData.step2.startDate}
                                />
                                <TravelInput
                                    type="date"
                                    placeholder="Trip End Date"
                                    value={userData.step2.endDate}
                                    onChange={(e) =>
                                        handleInputChange("step2", "endDate", e.target.value)
                                    }
                                    isInvalid={isInvalid && !userData.step2.endDate}
                                />
                            </span>
                        </div>
                    )}

                    {/* Step 3 */}
                    {currentStep === 2 && (
                        <div className="flex flex-col justify-center items-center gap-10">
                            <h1 className="max-w-[683px] text-2xl sm:text-4xl text-center font-semibold">Who would you like the insurance to cover?</h1>
                            <TravelSelect
                                placeholder="Preference"
                                value={userData.step3.preference}
                                onChange={(e) =>
                                    handleInputChange("step3", "preference", e.target.value)
                                }
                                isInvalid={isInvalid && !userData.step3.preference}
                                options={["Economy", "Business", "First Class"]}
                            />
                        </div>
                    )}

                    {/* Step 4 */}
                    {currentStep === 3 && (
                        <div className="flex flex-col justify-center items-center gap-10">
                            <Icons.QuoteBirthIcon />
                            <h1 className="max-w-[683px] text-2xl sm:text-4xl text-center font-semibold">What is the main traveller’s date of birth?</h1>
                            <TravelInput
                                placeholder="Date"
                                value={userData.step4.phone}
                                onChange={(e) =>
                                    handleInputChange("step4", "phone", e.target.value)
                                }
                                isInvalid={isInvalid && !userData.step4.phone}
                            />
                        </div>
                    )}

                    {/* Step 5: Economy Selection */}
                    {currentStep === 4 && (
                        <section>
                            <h1 className="max-w-[683px] text-2xl sm:text-4xl text-center font-semibold mb-6 vsm:mb-10">Travel Insurance Plans</h1>
                            <div className="w-80 tiny:w-[350px] vsm:w-[420px] sm:w-[600px] md:w-[708px] bg-[#FDE5DE] rounded-[15px]">
                                <Economy id="item1" show={showEconomy.item1} setShow={setShowEconomy} background="#FDE5DE" handleSubmit={handleSubmit} />
                                <Economy id="item2" show={showEconomy.item2} setShow={setShowEconomy} handleSubmit={handleSubmit} />
                                <Economy id="item3" show={showEconomy.item3} setShow={setShowEconomy} background="#FDE5DE" handleSubmit={handleSubmit} />
                                <Economy id="item4" show={showEconomy.item4} setShow={setShowEconomy} handleSubmit={handleSubmit} />
                            </div>
                        </section>
                    )}
                </div>

                {/* Action Buttons */}
                {currentStep < 4 && (
                    <div className="flex justify-center items-center gap-3 vsm:gap-10 my-5">
                        {/* Previous Button */}
                        <ActionButton
                            text="Previous"
                            iconPosition="left"
                            onClick={handlePrevious}
                            isDisabled={currentStep === 0}
                        />

                        {/* Next Button */}
                        <ActionButton
                            text="Next"
                            iconPosition="right"
                            onClick={handleNext}
                            isNext
                        />
                    </div>
                )}
            </section>
        </main>
    );
};

// Reusable Input Component with Dynamic Border
const TravelInput = ({ placeholder, value, onChange, isInvalid, type = "text" }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full max-w-80 vsm:max-w-96 sm:w-[400px] h-[75px] px-4 border rounded-[10px] text-[#C3C3C3] font-medium focus:outline-none
            ${isInvalid ? "border-secondaryColor border-2  animate-pulse" : "border-[#C3C3C3]"}
            ${value ? "text-black border-black" : "text-[#C3C3C3]"}
            `}
    />
);

// Reusable Select Component for Dropdown
const TravelSelect = ({ placeholder, value, onChange, options, isInvalid }) => (
    <select
        value={value}
        onChange={onChange}
        className={`w-full max-w-80 vsm:max-w-96 sm:w-[400px] h-[75px] px-4 border rounded-[10px] font-medium focus:outline-none 
            ${isInvalid ? "border-secondaryColor border-2  animate-pulse" : "border-[#C3C3C3]"}
            ${value ? "text-black border-black" : "text-[#C3C3C3]"}`}
    >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((option, idx) => (
            <option key={idx} value={option} className="font-medium">{option}</option>
        ))}
    </select>
);

// Reusable Button Component
const ActionButton = ({ text, iconPosition, onClick, isDisabled, isNext }) => (
    <button
        onClick={onClick}
        disabled={isDisabled}
        className={`group flex items-center justify-between px-5 sm:px-3 
        ${isNext ? "sm:pl-16" : "sm:pr-14"} w-36 sm:w-[220px] h-12 sm:h-[59px] text-sm vsm:text-base sm:text-lg font-medium 
        border rounded-[27.5px] shadow-md transition-all
        ${isDisabled ? "text-gray-400" : "text-black"}`}
    >
        {iconPosition === "left" && (
            <span
                className={`flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-transform -rotate-90 group-hover:-rotate-[135deg] 
                ${isDisabled ? "bg-gray-300" : "bg-black"}`} // Change background to black when not disabled
            >
                <Icons.QuoteArrowIcon />
            </span>
        )}
        {text}
        {iconPosition === "right" && (
            <span className="flex justify-center items-center bg-secondaryColor w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-transform group-hover:rotate-45">
                <Icons.QuoteArrowIcon />
            </span>
        )}
    </button>
);