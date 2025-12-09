"use client";

import ChooseUSSection from "@/components/AboutComp/ChooseUsSection/ChooseUSSection";
import CoreValuesSection from "@/components/AboutComp/CoreValuesSection/CoreValuesSection";
import HeroSection from "@/components/AboutComp/HeroSection/HeroSection";
import ServiceOverviewSection from "@/components/AboutComp/ServiceOverviewSection/ServiceOverviewSection";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/LandingPageComp/ContactForm/ContactForm";
import OurClientsSection from "@/components/LandingPageComp/OurClientsSection/OurClientsSection";
import MainLayout from "@/Layout/MainLayout";
import { Phone } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <div className="flex flex-col lg:gap-28 md:gap-20 gap-14">
        {/* Hero Section */}
        <HeroSection heading="About Us" />
        
        {/* Service Overview */}
        <ServiceOverviewSection />

        {/* Core Value */}
        <CoreValuesSection />

        {/* Choose us */}
        <ChooseUSSection />

        {/* Clients */}
        <OurClientsSection />
        {/* Contact Us */}
        <ContactForm />
      </div>

      <Footer />
    </MainLayout>
  );
};

export default page;
