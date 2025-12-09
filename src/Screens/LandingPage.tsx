import MainLayout from "@/Layout/MainLayout";
import Footer from "@/components/Footer/Footer";
import ChooseUSSection from "@/components/LandingPageComp/ChooseUSSection/ChooseUSSection";
import ContactForm from "@/components/LandingPageComp/ContactForm/ContactForm";
import HeroSection from "@/components/LandingPageComp/HeroSection/HeroSection";
import OurClientsSection from "@/components/LandingPageComp/OurClientsSection/OurClientsSection";
import OurExpertiseSection from "@/components/LandingPageComp/OurExpertiseSection/OurExpertiseSection";
import OurStackSection from "@/components/LandingPageComp/OurStackSection/OurStackSection";
import InustriesSection from "@/components/LandingPageComp/InustriesSection/InustriesSection";
import BlogSlider from "@/components/BlogSlider/BlogSlider";
import ServiceSection from "@/components/LandingPageComp/ServiceSection/ServiceSection";

export default function LandingPage() {
  return (
    <MainLayout fixedHead>
      {/* Hero Section */}
      <HeroSection />

      <div className="flex flex-col lg:gap-28 md:gap-20 gap-14">
      
        {/* Service Section */}
        <ServiceSection />

        {/* Mission Statement */}
        <InustriesSection />


        {/* Tech Stack */}
        <OurStackSection />

        {/* Why Choose Us */}
        <ChooseUSSection />

        {/* Our Expertise */}
        <BlogSlider />

        {/* Our Clients */}
        <OurClientsSection />

        {/*Contact US */}
        <ContactForm />
      </div>
      {/* Footer */}
      <Footer />
    </MainLayout>
  );
}
