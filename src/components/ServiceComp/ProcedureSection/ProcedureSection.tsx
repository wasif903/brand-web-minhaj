import Image from "next/image";
import React from "react";

const ProcedureSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-textBlue px-3 flex flex-col md:gap-8 gap-5">
      <div>
        <h6 className="uppercase text-white text-center fontJakartaSemiBold text-xl">Our Process</h6>
        <h3 className="text-center text-white ">Step By Step Procedure</h3>
      </div>
      <div className="flex items-center justify-center md:gap-10 gap-5 xl:flex-nowrap flex-wrap">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={`relative flex flex-col gap-3 items-start px-8 py-10 bg-white shadow-xl rounded-lg w-100 ${i % 2 ? "xl:mt-48 mt-0" : "mt-0"}`}>
            <Image src={"/Images/about/Pen.png"} alt="Pen icon" width={40} className="lg:w-14 md:w-10 w-8" height={40} />
            <strong className="md:text-2xl text-md fontJakartaSemiBold text-headingColor">Define</strong>
            <p className="text-textColor">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 1500s, when an unknown </p>
            <h3 className="text-[#010101]/33 absolute top-8 right-10">0{i + 1}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcedureSection;
