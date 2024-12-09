import { ArticleSlider } from "@/components";

export const SlidesSection = () => {
    return (
        <>
            {/* Gray LTR SLide */}
            <ArticleSlider title="Travel" url="/blog/travel-1" />

            {/* Orange RTL SLide */}
            <ArticleSlider title="Travel" url="/blog/travel-2" directionStyle="lg:flex-row-reverse lg:pr-32" buttonStyle="bg-primaryBgColor hover:bg-secondaryColor" backgroundStyle="bg-secondaryColor left-0 rounded-e-[58px]" direction="rtl" />

            {/* Gray LTR SLide */}
            <ArticleSlider title="Travel" url="/blog/travel-3" />

            {/* Orange RTL SLide */}
            <ArticleSlider title="Travel" url="/blog/travel-4" directionStyle="lg:flex-row-reverse lg:pr-32" buttonStyle="bg-primaryBgColor hover:bg-secondaryColor" backgroundStyle="bg-secondaryColor left-0 rounded-e-[58px]" direction="rtl" />

            {/* Gray LTR SLide */}
            <ArticleSlider title="Travel" url="/blog/travel-5" />
        </>
    )
}