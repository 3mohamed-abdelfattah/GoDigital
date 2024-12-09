// Components
import { Header, HeroSection, HowWorksSection, WhyDigitalSection, ArticleSlider, ServicesSection, GetQuote } from '@/components';

export const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <HowWorksSection />
            <WhyDigitalSection />
            <ArticleSlider url="/blog" />
            <ServicesSection />
            <GetQuote />
        </>
    );
};
