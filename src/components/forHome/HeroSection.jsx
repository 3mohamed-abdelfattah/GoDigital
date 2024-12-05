// Component
import { PlaneLabel } from "@/components"
// Images
import Symbol from "@/assets/images/icon.png"

export const HeroSection = () => {
    return (
        <main className="bg-secondaryBgColor mx-6 lg:mx-20 rounded-3xl md:rounded-[58px]">

            {/* First Hero Section [Logo & Titles] */}
            <section
                className="flex flex-col justify-center items-center bg-primaryBgColor text-center rounded-3xl md:rounded-[58px] text-primaryColor py-6 md:py-12 md:h-[590px]"
                style={{ boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)" }}
            >
                {/* Hero Section Logo */}
                <img src={Symbol} alt="Go Digital Icon" className="w-[100px] md:w-[199px]" />
                {/* Hero Section Titles */}
                <h1 className="max-w-[806px] mx-5 tiny:text-2xl vsm:text-4xl md:text-6xl font-semibold vsm:leading-[51.96px] md:leading-[81.96px]">Lorem ipsum dolor sit amet consectetur adipiscing</h1>
                <h2 className="mt-5 mb-6 mx-5 max-w-[519px] text-xs vsm:text-base md:text-[22px] vsm:leading-[30.05px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            </section>

            {/* Second Hero Section [Plane Labels] */}
            <section className="flex flex-wrap justify-center items-center gap-10 rounded-3xl md:rounded-[58px] text-center text-primaryColor pt-8 vsm:pb-8 md:pt-[78px] md:pb-16 mx-5 md:mx-20">
                <PlaneLabel>Travel Insurance</PlaneLabel>
                <PlaneLabel>Προσωπικών Ατυχημάτων Αλλοδαπών</PlaneLabel>
                <PlaneLabel>Ευθύνης Ασφαλιστικών Διαμεσολαβητών</PlaneLabel>
                <PlaneLabel>Ευθύνης Οδικού Μεταφορέα</PlaneLabel>
                <PlaneLabel rotateBox="rotate-90" hight="h-[241.8px]" rotateText="-rotate-90">Εγγυητικές Επιστολές</PlaneLabel>
            </section>

        </main>
    )
}