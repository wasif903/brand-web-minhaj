"use client";

import HeroSection from "@/components/AboutComp/HeroSection/HeroSection";
import CaseStudies from "@/components/CaseStudyComp/CaseStudies/CaseStudies";
import Portfolio from "@/components/CaseStudyComp/Portfolio/Portfolio";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/LandingPageComp/ContactForm/ContactForm";
import MainLayout from "@/Layout/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <HeroSection heading="Case Study" />
        <CaseStudies />
        <Portfolio />
        <ContactForm />
      </div>
      <Footer />
    </MainLayout>
  );
};

export default page;
