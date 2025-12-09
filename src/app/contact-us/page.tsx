"use client";

import HeroSection from "@/components/AboutComp/HeroSection/HeroSection";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/LandingPageComp/ContactForm/ContactForm";
import MainLayout from "@/Layout/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <HeroSection heading="Contact Us" />
      <ContactForm />
      <Footer />
    </MainLayout>
  );
};

export default page;
