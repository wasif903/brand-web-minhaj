import Button from "@/components/Button/Button";
import React from "react";

const ContactForm = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 z-20 relative bg-[url('/Images/home/ServiceSection.png')] bg-no-repeat bg-center bg-cover 2xl:px-80 lg:px-40 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-8  col-span-1 justify-center">
          <div className="flex flex-col ">
            <h6 className="uppercase text-textBlue text-start fontJakartaSemiBold text-xl">contact us</h6>
            <h3>Be On The Top & Reach Out To More People!</h3>
          </div>
          <div className="flex gap-4 mb-10">
            <div className="w-0.5 bg-textBlue  rounded" />
            <p className="text-textColor text-lg max-w-xl">Building your digital presence with website development, SEO ranking, targeted campaigns, and retargeting for maximum conversions.</p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <h5 className="text-textBlue">Get A Quote!</h5>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className=" border-b border-gray-400 outline-none xl:w-120 w-full py-3 placeholder:text-gray-400 focus:border-textBlue focus:placeholder:text-textBlue" />
            <input type="text" placeholder="Your Number" className=" border-b border-gray-400 outline-none xl:w-120 w-full py-3 placeholder:text-gray-400 focus:border-textBlue focus:placeholder:text-textBlue" />
            <input type="text" placeholder="Your Email" className=" border-b border-gray-400 outline-none xl:w-120 w-full py-3 placeholder:text-gray-400 focus:border-textBlue focus:placeholder:text-textBlue" />
            <input type="text" placeholder="Your Company" className=" border-b border-gray-400 outline-none xl:w-120 w-full py-3 placeholder:text-gray-400 focus:border-textBlue focus:placeholder:text-textBlue" />
            <input type="text" placeholder="Your Message" className=" border-b border-gray-400 outline-none xl:w-120 w-full py-3 placeholder:text-gray-400 focus:border-textBlue focus:placeholder:text-textBlue" />
          </div>
          <div>
            <Button name="Free Consultancy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
