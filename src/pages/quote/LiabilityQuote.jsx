import { useState } from "react";
// Components 
import { QuoteHeader } from "@/components";
// Icons
import * as Icons from "@/utils/icons.util";

export const LiabilityQuote = () => {
    const totalSteps = 1; // Total number of steps
    const [currentStep, setCurrentStep] = useState(0); // Current active step
    const [isInvalid, setIsInvalid] = useState(false); // Track invalid inputs
    const locations = ["New York", "Los Angeles", "Chicago", "London", "Tokyo"]; // Example locations
    const [userData, setUserData] = useState({
        step1: { departure: "", arrival: "" },
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

            <section className="border-t-2 mx-5 md:mx-0 my-2 flex flex-col justify-center items-center">

                {/* Step Forms */}
                <div className="my-20 flex flex-wrap justify-center items-center gap-5">
                    {/* Step 1 */}
                    {currentStep === 0 && (
                        <div className="flex flex-col justify-center items-center gap-5 sm:gap-10">
                            <Icons.QuoteCarIcon />
                            <h1 className="max-w-[683px] text-2xl sm:text-4xl text-center font-semibold">Plate Number (VRM)</h1>
                            <TravelSelect
                                placeholder="Where are you travelling from?"
                                value={userData.step1.departure}
                                onChange={(e) =>
                                    handleInputChange("step1", "departure", e.target.value)
                                }
                                isInvalid={isInvalid && !userData.step1.departure}
                                options={locations}
                            />
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center items-center gap-3 vsm:gap-10 my-5">
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

// Reusable Input Component with Dynamic Border
const TravelInput = ({ placeholder, value, onChange, isInvalid, type = "text" }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full max-w-80 vsm:max-w-96 sm:w-[400px] h-[75px] px-4 border rounded-[10px] text-[#C3C3C3] font-semibold focus:outline-none
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
        className={`w-full max-w-80 vsm:max-w-96 sm:w-[400px] h-[75px] px-4 border rounded-[10px] font-semibold focus:outline-none 
            ${isInvalid ? "border-secondaryColor border-2  animate-pulse" : "border-[#C3C3C3]"}
            ${value ? "text-black border-black" : "text-[#C3C3C3]"}`}
    >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((option, idx) => (
            <option key={idx} value={option} className="font-semibold">{option}</option>
        ))}
    </select>
);

// Reusable Button Component
const ActionButton = ({ text, iconPosition, onClick, isDisabled, isNext }) => (
    <button
        onClick={onClick}
        disabled={isDisabled}
        className={`group flex items-center justify-between px-5 sm:px-3 
        ${isNext ? "sm:pl-16" : "sm:pr-14"} w-36 sm:w-[220px] h-12 sm:h-[59px] text-sm vsm:text-base sm:text-lg font-semibold 
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