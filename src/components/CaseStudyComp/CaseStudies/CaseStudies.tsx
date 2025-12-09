import { useState } from "react";
import caseStudiesImg from "../../../../public/Images/casestudy/casestudies.png";
import Image from "next/image";
import Button from "@/components/Button/Button";

const CaseStudies = () => {
  const tabs = [
    "Example 1",
    "Example 2",
    "Example 3",
    "Example 4",
    "Example 5",
  ];
  const steps = [
    "Digital Marketing 1",
    "Digital Marketing 2",
    "Digital Marketing 3",
    "Digital Marketing 4",
    "Digital Marketing 5",
  ];

  const [selectedTab, setSelectedTabs] = useState("Example 1");
  const [selectedStep, setSelectedStep] = useState("Digital Marketing 1");
  return (
    <section className=" bg-[#f7f7f7] 2xl:px-80 lg:px-40 px-5 flex items-center flex-col gap-6 justify-center lg:py-14 md:py-10 py-7">
      <div className="flex flex-col gap-10">
        <div className="gap-4 flex flex-col">
          <h3 className="text-headingColor ">Case Studies</h3>
          <p className="text-textColor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            purus feugiat, molestie ipsum et, consequat nibh.
          </p>
        </div>
        <div className="grid sm:grid-cols-5 grid-cols-6 xl:w-[85%] md:w-[95%] w-full">
          {tabs.map((item, index) => (
            <div
              key={`tabs${index}`}
              className={`py-3 cursor-pointer flex items-center justify-center ${
                selectedTab == item
                  ? "bg-gradient-secondary text-white"
                  : "bg-white text-textBlue"
              } ${index == 0 && "sm:rounded-tl-md sm:rounded-bl-md"} ${
                index == tabs.length - 1 && "sm:rounded-tr-md sm:rounded-br-md"
              } ${index != 0 && "border-l border-l-textBlue"} ${
                index == tabs.length - 1 || index == tabs.length - 2
                  ? "max-sm:col-span-3"
                  : "max-sm:col-span-2"
              }`}
              onClick={() => setSelectedTabs(item)}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="xl:grid xl:grid-cols-3 flex gap-6 max-md:flex-wrap">
          <div className="flex flex-col gap-8 relative max-xl:w-[65%] max-md:w-full">
            <div className="w-px absolute h-full bg-textBlue left-3 top-0.5"></div>
            {steps.map((item, index) => (
              <div
                key={`steps${index}`}
                className="flex gap-4 cursor-pointer items-center z-10"
                onClick={() => setSelectedStep(item)}
              >
                <div
                  className={`h-6 w-6 rounded-full border border-textBlue ${
                    selectedStep == item ? "bg-textBlue" : "bg-white"
                  } `}
                ></div>
                <p
                  className={`${
                    selectedStep == item ? "text-textBlue" : "text-headingColor"
                  }`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          <Image
            src={caseStudiesImg}
            alt="img"
            width={300}
            height={800}
            className="max-xl:hidden"
          />
          <div className="flex flex-col justify-center">
            <h5 className="text-textBlue">{selectedStep}</h5>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, molestie ipsum et, consequat nibh.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, molestie ipsum et, consequat nibh.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, molestie ipsum et, consequat nibh.
            </p>
            <br />
            <div>
              <Button name="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
