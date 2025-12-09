"use client";

import React from "react";
import dynamic from "next/dynamic";
import Loader from "../Loader/Loader";

interface ButtonProps {
  name?: string;
  bgcolor?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
  icon?: React.ReactNode;
  textColor?: string;
  style?: React.CSSProperties;
  pClass?: string;
  mainClass?: string;
  type?: "button" | "submit" | "reset";
  isDark?: boolean;
}

const Button = ({ name, bgcolor, className, disabled, onClick, isLoading, icon, textColor, style, pClass, mainClass, type, isDark = false }: ButtonProps) => {
  let btnClass;

  if (disabled) {
    btnClass = `text-sm cursor-not-allowed text-white p-3 rounded-sm bg-gray-600 ${className} px-10`;
  } else if (mainClass) {
    btnClass = mainClass;
  } else {
    btnClass = `p-0 flex items-center justify-center text-sm ${className} px-10 active:scale-[1.01] cursor-pointer`;
  }

  return (
    <button
      className={`${btnClass}  ${textColor} 
      ${bgcolor ? bgcolor : disabled ? "bg-gray-600" : isDark ? " dark:bg-Green bg-gradient-secondary " : "bg-gradient-secondary"}
      ${disabled ? "text-white" : "text-primary-color"}  rounded-sm transition-all duration-300 hover:scale-[101%]
      `}
      style={{ paddingBlock: "0.75rem", ...style }}
      onClick={() => {
        if (disabled === true || isLoading) {
          return;
        } else if (onClick) {
          return onClick();
        } else {
          return;
        }
      }}
      disabled={disabled}
      type={`${type ? type : "button"}`}
    >
      {isLoading ? (
        <small className={`flex items-center text-sm justify-center cursor-pointer font-bold ${textColor ? textColor : isDark ? "dark:text-textColorLight text-white" : "text-white"} gap-2 ${pClass}`}>
          <Loader />
          {name && "Loading..."}
        </small>
      ) : icon ? (
        <small className={`${pClass} flex items-center justify-center cursor-pointer text-sm gap-2 w-full  font-bold ${textColor ? textColor : isDark ? "dark:text-textColorLight text-white" : "text-white"} `}>
          {name} {icon}
        </small>
      ) : (
        <small className={`flex items-center text-sm gap-2 justify-center cursor-pointer font-bold ${textColor ? textColor : isDark ? "dark:text-textColorLight text-white" : "text-white"} ${pClass}`}>{name}</small>
      )}
    </button>
  );
};

export default dynamic(() => Promise.resolve(Button), { ssr: false });
