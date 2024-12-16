import { ArticleSlider } from "@/components";

export const SlidesSection = () => {
    return (
        <>
            {/* Travel LTR SLide */}
            <ArticleSlider title="Travel" subTitle="Μάθε περισσότερα για την ταξιδιωτική ασφάλιση και τα ταξίδια" url="/blog/travel" />

            {/* Εγγυητικές RTL SLide */}
            <ArticleSlider title="Εγγυητικές" subTitle="Μάθε περισσότερα για την ασφάλιση και τις εγγυητικές επιστολές." url="/blog/guarantees" directionStyle="lg:flex-row-reverse lg:pr-32" buttonStyle="bg-primaryBgColor hover:bg-secondaryColor" backgroundStyle="bg-secondaryColor left-0 rounded-e-[58px]" direction="rtl" />

            {/* Ευθύνης Οδικού Μεταφορέα LTR SLide */}
            <ArticleSlider title="Ευθύνης Οδικού Μεταφορέα" subTitle="Μάθε περισσότερα για την ασφάλιση και τις μεταφορές." url="/blog/road-carrier-professional-liability" />

            {/* Προσωπικών Ατυχημάτων Αλλοδαπών RTL SLide */}
            <ArticleSlider title="Προσωπικών Ατυχημάτων Αλλοδαπών" subTitle="Μάθε περισσότερα για την ασφάλιση και την υγεία" url="/blog/medical-insurance-foreigners" directionStyle="lg:flex-row-reverse lg:pr-32" buttonStyle="bg-primaryBgColor hover:bg-secondaryColor" backgroundStyle="bg-secondaryColor left-0 rounded-e-[58px]" direction="rtl" />

            {/* Ευθύνης Ασφαλιστικών Διαμεσολαβητών LTR SLide */}
            <ArticleSlider title="Ευθύνης Ασφαλιστικών Διαμεσολαβητών" subTitle="Μάθε περισσότερα για την ασφάλιση και τη διαμεσολάβηση." url="/blog/professional-liability-insurance-intermediaries" />
        </>
    )
}