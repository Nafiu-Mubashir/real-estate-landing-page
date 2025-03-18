import React, { ReactNode } from "react";

const Button = ({
  text,
  fill,
  type,
  classNames,
  icon,
}: {
  text: string;
  fill?: boolean;
  type: "submit" | "button";
  classNames?: string;
  icon?: ReactNode;
}) => {
  return (
    <button
      type={type}
      className={`rounded-md px-4 py-2 cursor-pointer flex gap-3 items-center ${classNames} ${
        fill ? "text-white bg-primary" : "border border-[#E0DEF7]"
      }`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
