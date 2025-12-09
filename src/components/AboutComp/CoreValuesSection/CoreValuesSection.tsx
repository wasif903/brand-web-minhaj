import Image from "next/image";
import React from "react";

const CoreValuesSection = () => {
  return (
    <section className=" bg-white xl:px-20 px-3 flex flex-col md:gap-10 gap-5">
      <h3 className="text-center">Core Values</h3>
      <div className="flex items-center justify-center md:gap-10 gap-5 lg:flex-nowrap flex-wrap">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className={`relative flex flex-col gap-3 items-start px-8 py-10 bg-white shadow-xl rounded-lg w-100 ${i % 2 ? "lg:mt-48 mt-0" : "mt-0"}`}>
            <Image src={"/Images/about/Pen.png"} alt="Pen icon" className="lg:w-14 md:w-10 w-8" width={40} height={40} />
            <strong className="md:text-2xl text-sm fontJakartaSemiBold text-headingColor">Define</strong>
            <p className="text-textColor">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 1500s, when an unknown </p>
            <h3 className="text-[#010101]/33 absolute top-8 right-10">0{i + 1}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;
