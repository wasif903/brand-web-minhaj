import { Phone } from "lucide-react";
import React from "react";

const HeroSection = ({ heading, subHeading }: { heading?: string; subHeading?: string }) => {
  return (
    <section className=" z-20 relative xl:h-[60vh] h-[80vh]  bg-[url('/Images/home/ServiceSection.png')] bg-no-repeat bg-center bg-cover 2xl:px-80 lg:px-40 px-5 flex items-center flex-col gap-6 justify-center">
      <div className="flex flex-col gap-2 h-[50%]">
        <div className="flex items-center gap-2 flex-col">
          <h2>{heading || "UI/UX DESIGN"}</h2>
          <div className="w-20 h-0.5 bg-textBlue" />
        </div>
        <p className="text-center">{subHeading || "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam reme aperiam eaque abillo inventore"}</p>
      </div>
      <div className="bg-gradient-secondary text-white  z-20  justify-center flex py-6 absolute bottom-0 w-full">
        <div className=" flex items-center gap-10">
          <p className="text-xs sm:text-sm fontJakartaRegular">GET IN TOUCH</p>
          <span className="flex items-center gap-1">
            <Phone />
            <p className="text-xs sm:text-sm fontJakartaRegular">(414) 687 - 5892</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
