import { ArrowRight } from "lucide-react";
import React from "react";

const ServiceSection = ({ heading }: { heading?: string }) => {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "We use strategic marketing tactics that have been proven programming",
    },
    {
      title: "SEO Optimization",
      description: "Boost your search rankings with data-driven SEO strategies",
    },
    {
      title: "Content Strategy",
      description:
        "Engaging content that converts visitors into loyal customers",
    },
    {
      title: "Social Media",
      description: "Build your brand presence across all social platforms",
    },
  ];

  return (
    // <section className="py-12 sm:py-16 lg:py-20 z-20 relative bg-[url('/Images/home/ServiceSection.png')] bg-no-repeat bg-center bg-cover 2xl:px-80 lg:px-40 md:px-10 px-2">
    //   <div className="flex flex-col gap-20">
    //     <div>
    //       <h6 className="uppercase text-textBlue text-center fontJakartaSemiBold text-xl">
    //         Our Services
    //       </h6>
    //       {heading ? (
    //         <h3 className="text-center">{heading}</h3>
    //       ) : (
    //         <h3 className="text-center">
    //           Empowering Our Worldwide Clients To Adopt
    //           <br className="hidden sm:block" />
    //           Cutting-Edge Technology, Reimagine
    //           <br className="hidden sm:block" />
    //           Processes, And Enhance Experiences
    //         </h3>
    //       )}
    //     </div>

    //     {/* Services Grid */}
    //     <div className="grid lg:grid-cols-2 grid-cols-1 ">
    //       {services.map((service, index) => (
    //         <div
    //           key={index}
    //           className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between min-h-[240px] hover:-translate-y-1"
    //         >
    //           <div>
    //             <h3 className="text-lg font-bold text-gray-800 mb-3">
    //               {service.title}
    //             </h3>
    //             <p className="text-gray-600 text-sm leading-relaxed">
    //               {service.description}
    //             </p>
    //           </div>

    //           <button className="mt-6 flex items-center gap-2 text-blue-600 font-medium group/btn">
    //             <span>Take a tour</span>
    //             <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
    //           </button>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="2xl:px-80 lg:px-40 md:px-10 px-2">
      <div className="flex flex-col gap-20">
        <div>
          <h6 className="uppercase text-textBlue text-center fontJakartaSemiBold text-xl">
            Our Services
          </h6>
          {heading ? (
            <h3 className="text-center">{heading}</h3>
          ) : (
            <h3 className="text-center">
              Empowering Our Worldwide Clients To Adopt
              <br className="hidden sm:block" />
              Cutting-Edge Technology, Reimagine
              <br className="hidden sm:block" />
              Processes, And Enhance Experiences
            </h3>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between min-h-[240px] hover:-translate-y-1"
            >
              <div>
                <h6 className="text-2xl  text-gray-800 mb-3">
                  {service.title}
                </h6>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              <button className="mt-6 flex items-center gap-2 text-textBlue hover:text-blue-700 font-semibold group/btn transition-colors">
                <span>Take a tour</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
