// Component
import { SuccessRectangle } from '@/components'

export const ServicesSection = () => {
    return (
        <main className='bg-secondaryColor mx-7 lg:mx-20 rounded-b-3xl md:rounded-b-[58px] rounded-t-[30px] md:rounded-t-[70px] mb-5 md:mb-20'>

            {/* Head Titles */}
            <section
                className="flex flex-col justify-center items-center bg-secondaryBgColor text-center rounded-3xl md:rounded-[58px] py-12 h-[200px]"
                style={{ boxShadow: '0px 10px 10px 0px #8E240026' }}
            >
                <h1 className="max-w-[683px] text-3xl sm:text-[40px] font-bold leading-[54.64px]">Υπηρεσίες</h1>
                <h2 className="mt-5 mb-6 mx-2 sm:text-[22px] sm:leading-[30.05px]">Στην GoDigital φροντίζουμε να σας προσφέρουμε κορυφαίες υπηρεσίες που να κάνουν την εμπειρία σας μοναδική</h2>
            </section>

            {/* Services Rectangles */}
            <section className="flex flex-wrap gap-3 vsm:gap-5 justify-center xl:justify-evenly items-center rounded-3xl md:rounded-b-[58px] text-center py-10 sm:py-16 mx-1 vsm:mx-4 xl:mx-20" >
                <SuccessRectangle>Γρήγορη Προσφορά</SuccessRectangle>
                <SuccessRectangle>Ανθρώπινη Εξυπηρέτηση</SuccessRectangle>
                <SuccessRectangle>24/7 Βοήθεια</SuccessRectangle>
                <SuccessRectangle>Άμεση Διεκπεραίωση απαιτήσεων</SuccessRectangle>
            </section>

        </main>
    )
}