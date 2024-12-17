import { Link } from "react-router-dom";
// Components
import { Header, HeroProductsSection, CircleDashed, CoveragesSection, CircleGray, ArticleSlider, SuccessRectangle, GetQuote, GetQuoteSideBT } from "@/components"
// Icons
import * as Icons from "@/utils/icons.util"

// Array of objects containing title and description
const slidesData = [
    {
        title: "Θάνατος από Ατύχημα",
        description: "Καλύπτει τον θάνατο του ασφαλισμένου από ατύχημα με τους κληρονόμους του να εισπράττουν το ασφαλισμένο ποσό."
    },
    {
        title: "Ολική, μερική και μόνιμη ανικανότητα από ατύχημα",
        description: "Ο ασφαλισμένος εισπράττει το ποσό της κάλυψης σε περίπτωση Μόνιμης Ολικής Ανικανότητας ή Μόνιμης Μερικής Ανικανότητας από Ατύχημα.  "
    },
    {
        title: "Ενδονοσοκομειακή Περίθαλψη από ατύχημα ή ασθένεια",
        description: "Καλύπτει τα έξοδα περίθαλψης του του ασφαλισμένου σε δημόσιο νοσοκομείο, λόγω ατυχήματος ή ασθένειας."
    },
    {
        title: "Ιατροφαρμακευτικά έξοδα από ατύχημα ή ασθένεια",
        description: "Καλύπτει τα Ιατροφαρμακευτικά έξοδα του ασφαλισμένου σε δημόσιο νοσοκομείο, λόγω ατυχήματος ή ασθένειας."
    },
];

export const ForeignersPage = () => {
    return (
        <>
            <Header />

            <HeroProductsSection headTitle="Ιατροφαρμακευτική Ασφάλιση Αλλοδαπών … ψηφιακά απλή!" Subtitle="Εξασφαλίστε τις πιο αναγκαίες καλύψεις για την υγεία σας !" url="/get-a-quote-foreigners">
                <h3 data-aos="fade-right" className="text-sm sm:text-base lg:text-[22px] font-bold">Έτοιμοι; Γράψε την ταυτότητα σου και πάρε προσφορά!</h3>
                {/* Input section*/}
                <input data-aos="fade-right" placeholder="Ταυτότητα" className="w-full max-w-[450px] xl:max-w-[680px] appearance-none h-14 md:h-[74px] bg-white border border-gray-300 text-sm vsm:text-base font-bold rounded-[10px] text-[#7D7D7D] py-2 px-4 pr-10 shadow focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </HeroProductsSection>

            {/* How Work Section */}
            <section className="mb-0 sm:mb-24">
                <h1 data-aos="zoom-in" className="text-center text-2xl lg:text-[40px] font-bold my-10 sm:my-12">Πώς δουλεύει</h1>
                <article data-aos="fade-right" className="flex flex-col sm:flex-row items-start vsm:items-stretch max-w-[1202px] mx-20 vsm:mx-10 xl:m-auto">
                    <CircleDashed title="Δώσε τα προσωπικά σου στοιχεία">
                        <Icons.BoostIcon />
                    </CircleDashed>
                    {/* Dashed Line */}
                    <span className="w-0 h-10 mx-14 vsm:m-auto sm:w-full sm:h-0 border-[2px] border-secondaryColor border-dashed"></span>
                    <CircleDashed title="Δες το πλάνο σου">
                        <Icons.QuestionIcon />
                    </CircleDashed>
                    {/* Dashed Line */}
                    <span className="w-0 h-10 mx-14 vsm:m-auto sm:w-full sm:h-0 border-[2px] border-secondaryColor border-dashed"></span>
                    <CircleDashed title="Πλήρωσε ηλεκτρονικά">
                        <Icons.SendIcon />
                    </CircleDashed>
                    {/* Dashed Line */}
                    <span className="w-0 h-10 mx-14 vsm:m-auto sm:w-full sm:h-0 border-[2px] border-secondaryColor border-dashed"></span>
                    <CircleDashed title="Πάρε το συμβόλαιο στη στιγμή">
                        <Icons.CashIcon />
                    </CircleDashed>
                </article>
            </section>

            {/* Our coverages Section */}
            <CoveragesSection title="Οι καλύψεις μας" description="Οι καλύψεις που προσφέρει το συμβόλαιο Ιατροφαρμακευτικής Ασφάλισης Αλλοδαπών της GoDigital, εξασφαλίζουν τη μέγιστη προστασία για την υγεία σας. Πάντα να βεβαιώνεστε ποιες καλύψεις περιλαμβάνονται στο συμβόλαιο σας." data={slidesData} />

            {/* Services Section */}
            <section className="max-w-[1754px] bg-secondaryBgColor rounded-3xl lg:rounded-[58px] text-center mt-10 md:mt-[139px] mx-7 lg:mx-20 p-5 vsm:p-8 lg:p-12">
                {/* Head Titles */}
                <h1 data-aos="zoom-in" className="font-extrabold text-3xl sm:text-[40px]">Υπηρεσίες</h1>
                <h2 data-aos="zoom-in" className="max-w-[911px] mt-3 font-medium text-xs tiny:text-lg sm:text-[22px] sm:leading-[30.05px] mx-auto">Στην GoDigital φροντίζουμε να σας προσφέρουμε κορυφαίες υπηρεσίες που να κάνουν την εμπειρία σας μοναδική.</h2>
                {/* Circles */}
                <article data-aos="fade-right" className="flex flex-wrap gap-2 vsm:gap-5 items-start justify-evenly mt-10 md:mt-[91px]">
                    <CircleGray circleColor="secondaryColor" textColor="primaryBgColor">
                        Γρήγορη Προσφορά
                        <p className="font-normal mt-2 vsm:mt-5 text-center">Πάρε σε λιγότερο από 1 λεπτό προσφορά για την ασφάλιση του ταξιδιού σου</p>
                    </CircleGray>
                    <CircleGray circleColor="secondaryColor" textColor="primaryBgColor">
                        Ανθρώπινη Εξυπηρέτηση
                        <p className="font-normal mt-5 text-center">Πάρε σε λιγότερο από 1 λεπτό προσφορά για την ασφάλιση του ταξιδιού σου</p>
                    </CircleGray>
                    <CircleGray circleColor="secondaryColor" textColor="primaryBgColor">
                        Άμεση Διεκπεραίωση απαιτήσεων
                        <p className="font-normal mt-5 text-center">Φροντίζουμε να αποζημιώνεστε δίκαια και άμεσα</p>
                    </CircleGray>
                </article>
                {/* Quote Button */}
                <Link to="/get-a-quote-foreigners">
                    <button
                        className="w-28 h-12 sm:w-[213px] sm:h-[65px] rounded-[10px] bg-primaryBgColor text-primaryColor text-xs tiny:text-base sm:text-lg font-bold mt-8 sm:mt-16 hover:bg-secondaryColor hover:text-primaryColor transition_all active:scale-110"
                        style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                        data-aos="zoom-in"
                    >
                        Get Quote
                    </button>
                </Link>
            </section>

            {/* Why GoDigital Section*/}
            <section className="bg-secondaryColor mx-7 lg:mx-20 rounded-b-3xl md:rounded-b-[58px] rounded-t-[30px] md:rounded-t-[70px] my-5 md:my-20">
                {/* Head Titles */}
                <article
                    className="flex flex-col justify-center items-center bg-secondaryBgColor text-center rounded-3xl md:rounded-[58px] py-12 h-[200px]"
                    style={{ boxShadow: "0px 10px 10px 0px #8E240026" }}
                >
                    <h1 data-aos="zoom-in" className="max-w-[683px] text-3xl sm:text-[40px] font-bold leading-[54.64px]">Γιατί GoDigital;</h1>
                    <h2 data-aos="zoom-in" className="mt-5 mb-6 mx-2 sm:text-[22px] sm:leading-[30.05px]">Στην Go Digital απλοποιούμε την ασφάλιση ψηφιακά και φέρνουμε στην οθόνη σας την καλύτερη πρόταση Ιατροφαρμακευτικής Ασφάλισης Αλλοδαπών.</h2>
                </article>
                {/* Services Rectangles */}
                <article data-aos="fade-right" className="flex flex-wrap gap-3 vsm:gap-5 justify-center xl:justify-evenly items-center rounded-3xl md:rounded-b-[58px] text-center py-10 sm:py-16 mx-1 vsm:mx-4 xl:mx-20" >
                    <SuccessRectangle>Εύκολη Διαδικασία Αγοράς</SuccessRectangle>
                    <SuccessRectangle>Πλούσιες Καλύψεις</SuccessRectangle>
                    <SuccessRectangle>Άμεση Έκδοση Συμβολαίου</SuccessRectangle>
                </article>
            </section>

            {/* Article Slide Section */}
            <ArticleSlider subTitle="Μάθε περισσότερα για την ασφάλιση και την υγεία" />
            {/* Get Quote Bars */}
            <GetQuote url="/get-a-quote-foreigners" />
            <GetQuoteSideBT url="/get-a-quote-foreigners" />
        </>
    )
}