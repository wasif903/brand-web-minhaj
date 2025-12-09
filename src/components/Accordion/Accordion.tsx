"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Separator } from "../ui/separator";

const Accordion = () => {
  const [accordion, setAccordion] = useState<number | null>();

  return (
    <section className="py-12 sm:py-16 lg:py-20 z-20 relative  bg-[url('/Images/home/ServiceSection.png')] bg-no-repeat bg-center bg-cover 2xl:px-80 xl:px-40 px-5 flex items-center flex-col gap-6 justify-center">
      <div className="flex flex-col gap-10">
        <div>
          <h6 className="uppercase text-textColor text-center fontJakartaSemiBold text-xl">faq’s</h6>
          <h3 className="text-center text-headingColor ">Frequently Asked Questions</h3>
        </div>
        <div className=" text-textColor">
          <div className="flex flex-col">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className={`${accordion == index + 1 ? "mb-5" : "pb-0"} transition-all duration-500  bg-staticSecondaryBG   border-b border-gray-200`}>
                <span className={`${accordion == index + 1 && "text-headingColor"} transition-all duration-700  flex items-center justify-between  py-6 px-6 cursor-pointer`} onClick={() => setAccordion((prev) => (prev === index + 1 ? null : index + 1))}>
                  <p>What exactly do you do?</p>
                  <ChevronDown className={accordion == index + 1 ? "transition-transform duration-300 rotate-0 " : " transition-transform duration-300 rotate-180"} />
                </span>
                <p className={`${accordion === index + 1 ? "max-h-100 opacity-100 pb-6" : "max-h-0 opacity-0"} px-6 overflow-hidden text-textColor relative transition-normal duration-700 `}>We create websites, mobile apps, online stores, and digital marketing campaigns for businesses in Virginia that want to grow their customer base and simplify their online operations.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
