import { Navbar } from "@/src/components/layout/navbar";
import { Footer } from "@/src/components/layout/footer";
import { BrandIntro, Hero } from "@/src/modules/home";
import { AboutSection } from "@/src/modules/about";
import { ServicesSection } from "@/src/modules/services";
import { GallerySection } from "@/src/modules/gallery";
import { ReviewsSection } from "@/src/modules/reviews";
import { LocationSection } from "@/src/modules/location";
import { FinalCTA } from "@/src/modules/contact";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <ServicesSection />
                <BrandIntro />
                <AboutSection />
                <GallerySection />
                <ReviewsSection />
                <FinalCTA />
                <LocationSection />
            </main>
            <Footer />
        </>
    );
}
