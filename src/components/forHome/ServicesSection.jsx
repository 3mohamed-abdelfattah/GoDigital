// Component
import { SuccessRectangle } from '@/components'

export const ServicesSection = () => {
    return (
        <main className='bg-secondaryColor mx-20 rounded-b-[58px] rounded-t-[70px] mb-20'>

            {/* Head Titles */}
            <section
                className="flex flex-col justify-center items-center bg-secondaryBgColor text-center rounded-[58px] py-12 h-[200px]"
                style={{ boxShadow: '0px 10px 10px 0px #8E240026' }}
            >
                <h1 className="max-w-[683px] text-[40px] font-bold leading-[54.64px]">Υπηρεσίες</h1>
                <h2 className="mt-5 mb-6 text-[22px] leading-[30.05px]">Στην GoDigital φροντίζουμε να σας προσφέρουμε κορυφαίες υπηρεσίες που να κάνουν την εμπειρία σας μοναδική</h2>
            </section>

            {/* Services Rectangles */}
            <section className="flex justify-evenly items-center rounded-b-[58px] text-center py-16 mx-20" >
                <SuccessRectangle>Γρήγορη Προσφορά</SuccessRectangle>
                <SuccessRectangle>Ανθρώπινη Εξυπηρέτηση</SuccessRectangle>
                <SuccessRectangle>24/7 Βοήθεια</SuccessRectangle>
                <SuccessRectangle>Άμεση Διεκπεραίωση απαιτήσεων</SuccessRectangle>
            </section>

        </main>
    )
}