"use client";

import HeroSection from "@/components/AboutComp/HeroSection/HeroSection";
import BlogCard from "@/components/BlogCard/BlogCard";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/LandingPageComp/ContactForm/ContactForm";
import OurClientsSection from "@/components/LandingPageComp/OurClientsSection/OurClientsSection";
import MainLayout from "@/Layout/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <div className="flex flex-col lg:gap-28 md:gap-20 gap-14">
        <HeroSection heading="Blogs & Insights" />
        <section className=" bg-white 2xl:px-80 lg:px-40 px-5 grid md:grid-cols-2 grid-cols-1 items-center flex-col gap-6 justify-center place-self-center">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>
        <OurClientsSection />
        <section className=" bg-white 2xl:px-80 lg:px-40 px-5 grid md:grid-cols-2 grid-cols-1 items-center flex-col gap-6 justify-center place-self-center">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>
        <ContactForm />
      </div>
      <Footer />
    </MainLayout>
  );
};

export default page;
