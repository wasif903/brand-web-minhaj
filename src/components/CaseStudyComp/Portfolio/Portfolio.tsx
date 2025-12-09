import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section className=" bg-white 2xl:px-80 lg:px-40 px-5 flex items-center flex-col gap-6 justify-center lg:py-14 md:py-10 py-7">
      <div className="flex flex-col gap-10">
        <div className="gap-4 flex flex-col">
          <h3 className="text-center text-headingColor ">Portfolio</h3>
          <p className="text-textColor 2xl:px-40 lg:px-20 px-0 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            purus feugiat, molestie ipsum et, consequat nibh.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-8 gap-2">
          <Image
            src={"/Images/Portfolio/PortfolioImage.png"}
            alt="image"
            className="rounded-xl"
            width={450}
            height={450}
          />
          <Image
            src={"/Images/Portfolio/PortfolioImage.png"}
            alt="image"
            className="rounded-xl"
            width={450}
            height={450}
          />
          <Image
            src={"/Images/Portfolio/PortfolioImage.png"}
            alt="image"
            className="rounded-xl"
            width={450}
            height={450}
          />
          <Image
            src={"/Images/Portfolio/PortfolioImage.png"}
            alt="image"
            className="rounded-xl"
            width={450}
            height={450}
          />
          <Image
            src={"/Images/Portfolio/PortfolioImage.png"}
            alt="image"
            className="rounded-xl"
            width={450}
            height={450}
          />
          <Image
            src={"/Images/Portfolio/PortfolioImage.png"}
            alt="image"
            className="rounded-xl"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
