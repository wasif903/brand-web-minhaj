"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";

const MainLayout = ({
  children,
  fixedHead,
}: {
  children?: ReactNode;
  fixedHead?: boolean;
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Header fixedHead={fixedHead} />
      {children}
    </div>
  );
};

export default MainLayout;
