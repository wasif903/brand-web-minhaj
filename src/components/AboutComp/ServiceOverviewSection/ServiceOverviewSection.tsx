import Image from "next/image";
import React, { CSSProperties } from "react";

const ServiceOverviewSection = ({ style }: { style?: CSSProperties }) => {
  return (
    <section className=" bg-white 2xl:px-80 xl:px-40 px-5">
      <div className="items-center justify-center grid grid-cols-2 gap-20" style={style}>
        <div className="flex flex-col gap-8 min-[1000px]:col-span-1 col-span-2">
          <div className="flex flex-col ">
            <h6 className="uppercase text-textBlue text-start fontJakartaSemiBold text-xl">About us</h6>
            <h3 className="text-wrap">Heading Where I Define About Company.</h3>
          </div>
          <div className="flex gap-4">
            <div className="w-0.5 bg-[#1A73D9] rounded" />
            <p className="text-textColor text-lg">We are an experienced and talented and skilled team in digital disciplines. We ensure our clients are up to date with the latest trends in technology facilitating them to reach their business goals. Our team works extensively to develop strategies for businesses focusing on getting conversions.</p>
          </div>
        </div>
        <Image src={"/Images/about/AboutImage.png"} alt="Choose Us" className="object-contain xl:h-180 h-120 xl:w-180 w-120 min-[1000px]:flex hidden col-span-1" width={500} height={500} />
      </div>
    </section>
  );
};

export default ServiceOverviewSection;
