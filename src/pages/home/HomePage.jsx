// Components
import { Header, HeroSection, HowWorksSection, WhyDigitalSection, ArticleSlider, CoveragesSection, GetQuote } from '@/components';

// Array of objects containing title and description for ( services section )
const slidesData = [
    {
        title: "Γρήγορη Προσφορά",
        description: "Πάρε σε λιγότερο από 1 λεπτό προσφορά για την ασφάλιση του ταξιδιού σου."
    },
    {
        title: "Ανθρώπινη Εξυπηρέτηση",
        description: "Έχεις απορίες; Άσε μας τα στοιχεία σου και θα επικοινωνήσουμε άμεσα μαζί σου."
    },
    {
        title: "Βοήθεια Απαιτήσεων",
        description: "Τη δύσκολη στιγμή έχεις δίπλα σου έναν άνθρωπο να σε στηρίξει."
    },
    {
        title: "Άμεση Διεκπεραίωση απαιτήσεων",
        description: "Φροντίζουμε να αποζημιώνεστε δίκαια και άμεσα."
    },
];

export const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <HowWorksSection />
            <WhyDigitalSection />
            <ArticleSlider url="/blog" />
            {/* Services Section */}
            <CoveragesSection title="Υπηρεσίες" description="Στη GoDigital φροντίζουμε να σας προσφέρουμε κορυφαίες υπηρεσίες που να κάνουν την εμπειρία σας μοναδική." data={slidesData} />
            <GetQuote />
        </>
    );
};
