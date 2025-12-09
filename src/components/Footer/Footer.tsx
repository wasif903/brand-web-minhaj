import { LocationEditIcon, Mail, MapPin, Phone, Pin } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <section className="bg-[#186DBF]/10 flex flex-col gap-16 2xl:px-80 xl:px-40 px-10 pb-3 pt-16">
      <div className="grid lg:grid-cols-4 min-[850px]:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-[850px]:gap-10">
        <div className="col-span-1 gap-4 flex flex-col">
          <Image src={"/Images/Logo.png"} alt="Logo" width={100} height={100} />
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
        </div>
        <div className="col-span-1 flex flex-col gap-3">
          <strong className="text-xl fontJakartaSemiBold text-headingColor">Services</strong>
          <ul className="flex flex-col gap-2 text-textColor">
            <li>Designing & Branding</li>
            <li>Digital Marketing</li>
            <li>Website Development</li>
            <li>SEO</li>
            <li>UI/UX Development</li>
            <li>Chatbot Development</li>
            <li>Software Development</li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-3">
          <strong className="text-xl fontJakartaSemiBold text-headingColor">Contacts us</strong>
          <ul className="flex flex-col gap-4 text-textColor">
            <li className="flex items-center gap-1">
              <Mail color="grey" /> contact@company.com
            </li>
            <li className="flex items-center gap-1">
              <Phone color="grey" /> (414) 687 - 5892
            </li>
            <li className="flex items-start gap-1">
              <MapPin color="grey" /> 794 Mcallister St San Francisco, 94102
            </li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-3">
          <strong className="text-xl fontJakartaSemiBold">NewsLetter</strong>
          <div className="flex flex-col gap-3 items-start">
            <input type="text" placeholder="Enter Email" className="px-4 py-3 outline-0 border border-textBlue rounded-sm w-full" />
            <Button name="Submit" />
          </div>
        </div>
      </div>
      <div className="flex min-[900px]:flex-row flex-col justify-between items-center">
        <p>Copyright © 2025 Minhaj Solutions</p>
        <span className="flex items-center gap-1">
          <p>All Rights Reserved</p>
          <p>| Terms and Conditions </p>
          <p>| Privacy Policy </p>
        </span>
      </div>
    </section>
  );
};

export default Footer;
