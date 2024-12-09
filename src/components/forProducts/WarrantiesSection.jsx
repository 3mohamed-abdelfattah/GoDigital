const styles = {
    paragraphStyle: `flex justify-center items-center flex-shrink-0 text-primaryColor border border-primaryColor rounded-[20px] w-[250px] h-[80px] xl:w-[300px] xl:h-[100px] 2xl:w-[356px] 2xl:h-[121.159px] sm:text-[22px] font-medium hover:text-secondaryColor hover:border-secondaryColor cursor-pointer transition_all`
}
export const WarrantiesSection = () => {
    return (
        <section className="max-w-[1754px] bg-primaryBgColor rounded-3xl lg:rounded-[58px] text-center mt-10 md:mt-[139px] mx-7 lg:mx-20 p-5 vsm:p-8 lg:p-12">
            {/* Head Titles */}
            <h1 className="font-extrabold text-2xl leading-[50px] sm:text-[40px] text-primaryColor">H GoDigital προσφέρει τα πιο κάτω είδη Εγγυήσεων</h1>

            {/* Warranties */}
            <article className="flex flex-wrap gap-2 vsm:gap-5 items-center justify-evenly mt-10 md:mt-[91px]">
                <p className={styles.paragraphStyle}>Εγγύηση Συμμετοχής</p>
                <p className={styles.paragraphStyle}>Εγγύηση Προκαταβολής</p>
                <p className={styles.paragraphStyle}>Εγγύησης Καλής Εκτέλεσης</p>
                <p className={styles.paragraphStyle}>Εγγύηση Καλής Πληρωμής</p>
                <p className={styles.paragraphStyle}>Εγγύηση Καλής Λειτουργίας και Συντήρησης</p>
                <p className={styles.paragraphStyle}>Τελωνείου</p>
                <p className={styles.paragraphStyle}>Για τμήμα Μετανάστευσης</p>
                <p className={styles.paragraphStyle}>Ρυθμιστική Αρχή Ενέργειας (Ρ.Α.Ε.)</p>
            </article>
        </section>
    )
}