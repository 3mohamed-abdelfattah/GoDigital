// Component
import { PlaneLabel } from '@/components'
// Images
import Symbol from '@/assets/images/icon.png'

export const HeroSection = () => {
    return (
        <main className='bg-secondaryBgColor mx-20 rounded-[58px]'>

            {/* First Hero Section [Logo & Titles] */}
            <section
                className="flex flex-col justify-center items-center bg-primaryBgColor text-center rounded-[58px] text-primaryColor py-12 h-[590px]"
                style={{ boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)' }}
            >
                {/* Hero Section Logo */}
                <img src={Symbol} alt='Go Digital Icon' width={199} />
                {/* Hero Section Titles */}
                <h1 className="max-w-[806px] text-6xl font-semibold leading-[81.96px]">Lorem ipsum dolor sit amet consectetur adipiscing</h1>
                <h2 className="mt-5 mb-6 max-w-[519px] text-[22px] leading-[30.05px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            </section>

            {/* Second Hero Section [Plane Labels] */}
            <section className="flex justify-center items-center gap-10 rounded-b-[58px] text-center text-primaryColor pt-[78px] pb-16 mx-20">
                <PlaneLabel>Travel Insurance</PlaneLabel>
                <PlaneLabel>Προσωπικών Ατυχημάτων Αλλοδαπών</PlaneLabel>
                <PlaneLabel>Ευθύνης Ασφαλιστικών Διαμεσολαβητών</PlaneLabel>
                <PlaneLabel>Ευθύνης Οδικού Μεταφορέα </PlaneLabel>
                <PlaneLabel>Εγγυητικές Επιστολές</PlaneLabel>
            </section>

        </main>
    )
}