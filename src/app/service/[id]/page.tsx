"use client";

import HeroSection from "@/components/AboutComp/HeroSection/HeroSection";
import ServiceOverviewSection from "@/components/AboutComp/ServiceOverviewSection/ServiceOverviewSection";
import Accordion from "@/components/Accordion/Accordion";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/LandingPageComp/ContactForm/ContactForm";
import OurClientsSection from "@/components/LandingPageComp/OurClientsSection/OurClientsSection";
import OurStackSection from "@/components/LandingPageComp/OurStackSection/OurStackSection";
import InustriesSection from "@/components/LandingPageComp/InustriesSection/InustriesSection";
import ProcedureSection from "@/components/ServiceComp/ProcedureSection/ProcedureSection";
import MainLayout from "@/Layout/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <div className="flex flex-col lg:gap-28 md:gap-20 gap-14">
        <HeroSection heading="UI/UX DESIGN" />
        <ServiceOverviewSection
          style={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        />
        <InustriesSection heading="Related Service" />
      </div>
      <div className="flex flex-col lg:gap-28 md:gap-20 gap-14">
        <ProcedureSection />
        <OurStackSection />
        <Accordion />
        <OurClientsSection />
        <ContactForm />
      </div>
      <Footer />
    </MainLayout>
  );
};

export default page;
