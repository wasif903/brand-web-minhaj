import Image from "next/image";
import React from "react";

const ChooseUSSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-textBlue 2xl:px-80 xl:px-40 px-5">
      <div className="flex lg:flex-row flex-col lg:items-center items-start justify-center">
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col ">
            <h6 className="uppercase text-white text-start fontJakartaSemiBold text-xl">Why choose us</h6>
            <h3 className="text-white">Transforming Technology Into A Beneficial Influence</h3>
          </div>
          <div className="flex gap-4 mb-10">
            <div className="w-0.5 bg-[#fff] rounded" />
            <p className="text-white text-lg max-w-xl">
              We are an experienced and talented and skilled team in digital disciplines. We ensure our clients are up to date with the latest trends in technology facilitating them to reach their business goals. <br /> Our team works extensively to develop strategies for businesses focusing on getting conversions.
            </p>
          </div>
        </div>
        <Image src={"/Images/about/WhiteLine.png"} alt="Choose Us" className="object-contain h-100 w-20 lg:flex hidden" width={100} height={100} />
        <div className="lg:flex lg:flex-wrap grid grid-cols-2 gap-10 lg:pl-20 ">
          <span className="text-white">
            <h2>500+</h2>
            <p>Projects Delivered</p>
          </span>
          <span className="text-white">
            <h2>500+</h2>
            <p>Projects Delivered</p>
          </span>
          <span className="text-white">
            <h2>250+</h2>
            <p>Clients Served</p>
          </span>
          <span className="text-white">
            <h2>250+</h2>
            <p>Clients Served</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ChooseUSSection;
