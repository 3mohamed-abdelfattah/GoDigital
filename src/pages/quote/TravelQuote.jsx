import { useState } from "react";
// Components
import { QuoteHeader } from "@/components";
// Icons
import * as Icons from "@/utils/icons.util";

// Reusable Input Component with Dynamic Border
const TravelInput = ({ placeholder, value, onChange, isInvalid }) => (
    <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full max-w-80 vsm:max-w-96 sm:w-[400px] h-[75px] px-4 border rounded-[10px] text-gray-700 font-semibold focus:outline-none
            ${isInvalid ? "border-red-500" : "border-gray-300"}`}
    />
);

// Reusable Button Component
const ActionButton = ({ text, iconPosition, onClick, isDisabled, isNext }) => (
    <button
        onClick={onClick}
        disabled={isDisabled}
        className={`group flex items-center justify-between px-5 sm:px-3 
        ${isNext ? "sm:pl-16" : "sm:pr-14"} w-36 sm:w-[220px] h-12 sm:h-[59px] text-sm vsm:text-base sm:text-lg font-semibold 
        border rounded-[27.5px] shadow-md transition-all
        ${isDisabled ? "border-gray-300 text-gray-400" : "text-black"}`}
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

export const TravelQuote = () => {
    const totalSteps = 4; // Total number of steps
    const [currentStep, setCurrentStep] = useState(0); // Current active step
    const [userData, setUserData] = useState({
        step1: { departure: "", arrival: "" },
        step2: { name: "" },
        step3: { email: "" },
        step4: { phone: "" },
    });

    const [isInvalid, setIsInvalid] = useState(false); // Track invalid inputs

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
            <section className="border-t-2 mx-5 md:mx-0 my-2 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center my-10">
                    {/* Container for Progress Bar and Plane Icon */}
                    <div className="flex items-center gap-3 relative w-full">
                        {/* Progress Bar Steps */}
                        {Array.from({ length: totalSteps }).map((_, index) => (
                            <div
                                key={index}
                                className={`w-14 vsm:w-20 sm:w-32 md:w-[170px] lg:w-[214px] h-[15px] rounded-[5px]
                    ${index < currentStep ? "bg-orange-400" : "bg-gray-300"}
                    ${index === currentStep ? "ml-[70px] md:ml-16" : ""}`} // Add margin only to the current step
                            ></div>
                        ))}

                        {/* Plane Icon with Animation */}
                        <span
                            className="absolute transition_all"
                            style={{
                                left: `calc(${currentStep * 23.5}%)`, // Adjusts plane's position dynamically based on the current step
                            }}
                        >
                            <Icons.QuotePlaneIcon />
                        </span>
                    </div>
                </div>

                {/* Step Forms */}
                <div className="my-14 flex flex-wrap justify-center items-center gap-5">
                    {/* Step 1 */}
                    {currentStep === 0 && (
                        <>
                            <TravelInput
                                placeholder="Where are you travelling from?"
                                value={userData.step1.departure}
                                onChange={(e) =>
                                    handleInputChange("step1", "departure", e.target.value)
                                }
                                isInvalid={isInvalid && !userData.step1.departure}
                            />
                            <TravelInput
                                placeholder="Where are you travelling to?"
                                value={userData.step1.arrival}
                                onChange={(e) =>
                                    handleInputChange("step1", "arrival", e.target.value)
                                }
                                isInvalid={isInvalid && !userData.step1.arrival}
                            />
                        </>
                    )}

                    {/* Step 2 */}
                    {currentStep === 1 && (
                        <TravelInput
                            placeholder="Enter your full name"
                            value={userData.step2.name}
                            onChange={(e) =>
                                handleInputChange("step2", "name", e.target.value)
                            }
                            isInvalid={isInvalid && !userData.step2.name}
                        />
                    )}

                    {/* Step 3 */}
                    {currentStep === 2 && (
                        <TravelInput
                            placeholder="Enter your email"
                            value={userData.step3.email}
                            onChange={(e) =>
                                handleInputChange("step3", "email", e.target.value)
                            }
                            isInvalid={isInvalid && !userData.step3.email}
                        />
                    )}

                    {/* Step 4 */}
                    {currentStep === 3 && (
                        <TravelInput
                            placeholder="Enter your phone number"
                            value={userData.step4.phone}
                            onChange={(e) =>
                                handleInputChange("step4", "phone", e.target.value)
                            }
                            isInvalid={isInvalid && !userData.step4.phone}
                        />
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center items-center gap-3 vsm:gap-10 my-10">
                    {/* Previous Button */}
                    <ActionButton
                        text="Previous"
                        iconPosition="left"
                        onClick={handlePrevious}
                        isDisabled={currentStep === 0}
                    />

                    {/* Next or Submit Button */}
                    {currentStep < totalSteps - 1 ? (
                        <ActionButton
                            text="Next"
                            iconPosition="right"
                            onClick={handleNext}
                            isNext
                        />
                    ) : (
                        <ActionButton
                            text="Submit"
                            iconPosition="right"
                            onClick={handleSubmit}
                            isNext
                            isDisabled={!isStepValid(currentStep)}
                        />
                    )}
                </div>
            </section>
        </main>
    );
};