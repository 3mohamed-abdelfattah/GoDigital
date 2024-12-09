// Components
import { Header, HeroProductsSection, CircleDashed, CircleGray, ArticleSlider, SuccessRectangle } from "@/components"
// Icons
import * as Icons from "@/utils/icons.util"

export const TravelPage = () => {
    return (
        <main>
            <Header />
            <HeroProductsSection headTitle="Ταξιδιωτική Ασφάλιση … ψηφιακά απλή!" Subtitle="Η ταξιδιωτική ασφάλιση επιτέλους πιο απλή από ποτέ!">
                <span>
                    <h3 className="text-sm vsm:text-base lg:text-[22px] font-bold">Που ταξιδεύεις;</h3>
                    <h4 className="text-sm vsm:text-base lg:text-[22px]">Πες μας τον προορισμό σου και πάρε προσφορά!</h4>
                </span>

                {/* Select Input section*/}
                <div className="relative w-full max-w-[450px] xl:max-w-[680px]">
                    <select defaultValue="" className="w-full appearance-none h-14 md:h-[74px] bg-white border border-gray-300 text-sm vsm:text-base font-bold rounded-[10px] text-[#7D7D7D] py-2 px-4 pr-10 shadow focus:outline-none focus:ring-2 focus:ring-orange-400">
                        <option value="" disabled hidden>
                            Country
                        </option>
                        <option value="1">Greece</option>
                        <option value="2">Egypt</option>
                        <option value="3">France</option>
                        {/* Add more options */}
                    </select>
                    <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                        <Icons.SelectArrowIcon />
                    </span>
                </div>
            </HeroProductsSection>

            {/* How Work Section */}
            <section className="mb-0 sm:mb-24">
                <h1 className="text-center text-2xl lg:text-[40px] font-bold my-10 sm:my-12">Πώς δουλεύει</h1>
                <article className="flex flex-col sm:flex-row items-start vsm:items-stretch max-w-[1202px] mx-20 vsm:mx-10 xl:m-auto">
                    <CircleDashed title="Πες μας που πας και πότε">
                        <Icons.BoostIcon />
                    </CircleDashed>
                    {/* Dashed Line */}
                    <span className="w-0 h-10 mx-14 vsm:m-auto sm:w-full sm:h-0 border-[2px] border-secondaryColor border-dashed"></span>

                    <CircleDashed title="Επέλεξε το πλάνο που σου ταιριάζει">
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

            {/* Services Section */}
            <section className="max-w-[1754px] bg-secondaryBgColor rounded-3xl lg:rounded-[58px] text-center mt-10 md:mt-[139px] mx-7 lg:mx-20 p-5 vsm:p-8 lg:p-12">
                {/* Head Titles */}
                <h1 className="font-extrabold text-3xl sm:text-[40px]">Υπηρεσίες</h1>
                <h2 className="max-w-[911px] mt-3 font-medium text-xs tiny:text-lg sm:text-[22px] sm:leading-[30.05px] mx-auto">Στην GoDigital φροντίζουμε να σας προσφέρουμε κορυφαίες υπηρεσίες που να κάνουν την εμπειρία σας μοναδική.</h2>

                {/* Circles */}
                <article className="flex flex-wrap gap-2 vsm:gap-5 items-start justify-evenly mt-10 md:mt-[91px]">
                    <CircleGray circleColor="secondaryColor" textColor="primaryBgColor">
                        Γρήγορη Προσφορά
                        <p className="font-normal mt-2 vsm:mt-5 text-center">Πάρε σε λιγότερο από 1 λεπτό προσφορά για την ασφάλιση του ταξιδιού σου</p>
                    </CircleGray>
                    <CircleGray circleColor="secondaryColor" textColor="primaryBgColor">
                        Ανθρώπινη Εξυπηρέτηση
                        <p className="font-normal mt-5 text-center">Έχεις απορίες; Άσε μας τα στοιχεία σου και θα επικοινωνήσουμε άμεσα μαζί σου.</p>
                    </CircleGray>
                    <CircleGray circleColor="secondaryColor" textColor="primaryBgColor">
                        24/7 Βοήθεια
                        <p className="font-normal mt-5 text-center">Στη διάθεση σας διεθνές τηλεφωνικό κέντρο για άμεση εξυπηρέτηση όσο βρίσκεστε στο εξωτερικό.</p>
                    </CircleGray>
                    <CircleGray circleColor="secondaryColor" textColor="primaryBgColor">
                        Άμεση Διεκπεραίωση απαιτήσεων
                        <p className="font-normal mt-5 text-center">Φροντίζουμε να αποζημιώνεστε δίκαια και άμεσα</p>
                    </CircleGray>
                </article>

                {/* Quote Button */}
                <button
                    className="w-28 h-12 sm:w-[213px] sm:h-[65px] rounded-[10px] bg-primaryBgColor text-primaryColor text-xs tiny:text-base sm:text-lg font-bold mt-8 sm:mt-16 hover:bg-secondaryColor hover:text-primaryColor transition_all active:scale-110"
                    style={{ boxShadow: "0px 4px 4px 0px #00000026" }}
                >
                    Get Quote
                </button>
            </section>

            {/* Why GoDigital Section*/}
            <section className="bg-secondaryColor mx-7 lg:mx-20 rounded-b-3xl md:rounded-b-[58px] rounded-t-[30px] md:rounded-t-[70px] my-5 md:my-20">
                {/* Head Titles */}
                <article
                    className="flex flex-col justify-center items-center bg-secondaryBgColor text-center rounded-3xl md:rounded-[58px] py-12 h-[200px]"
                    style={{ boxShadow: "0px 10px 10px 0px #8E240026" }}
                >
                    <h1 className="max-w-[683px] text-3xl sm:text-[40px] font-bold leading-[54.64px]">Γιατί GoDigital;</h1>
                    <h2 className="mt-5 mb-6 mx-2 sm:text-[22px] sm:leading-[30.05px]">Στην Go Digital απλοποιούμε την ασφάλιση ψηφιακά και φέρνουμε στην οθόνη σας τις καλύτερες επιλογές ταξιδιωτικής ασφάλισης.</h2>
                </article>

                {/* Services Rectangles */}
                <article className="flex flex-wrap gap-3 vsm:gap-5 justify-center xl:justify-evenly items-center rounded-3xl md:rounded-b-[58px] text-center py-10 sm:py-16 mx-1 vsm:mx-4 xl:mx-20" >
                    <SuccessRectangle>Εύκολη Διαδικασία Αγοράς</SuccessRectangle>
                    <SuccessRectangle>Διαφορετικές Επιλογές</SuccessRectangle>
                    <SuccessRectangle>Άμεση Έκδοση Συμβολαίου</SuccessRectangle>
                    <SuccessRectangle>24/7 Εξυπηρέτηση σε όλο τον κόσμο</SuccessRectangle>
                </article>
            </section>

            {/* Article Slide Section */}
            <ArticleSlider subTitle="Μάθε περισσότερα για την ταξιδιωτική ασφάλιση και τα ταξίδια" />
        </main>
    )
}