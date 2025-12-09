import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className="flex flex-col gap-6 p-4 border border-gray-200  min-[1100px]:w-100 items-center">
      <Image src={"/images/Portfolio/PortfolioImage.png"} alt="Blog Image" className="min-[1100px]:w-100 w-full h-52 object-cover rounded-md" width={450} height={450} />
      <div className="flex flex-col gap-2">
        <strong className="text-headingColor fontJakartaSemiBold text-xl ">How to Secure Your VPS in Under 30 Minutes</strong>
        <small className="text-textColor">A simple guide for secure server hardening for Linux: lock down SSH, close ports, install fail2ban, and setup your firewall like a pro.</small>
      </div>
    </div>
  );
};

export default BlogCard;
