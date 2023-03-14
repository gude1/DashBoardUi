import React from "react";

export type ButtonProps = {
  lefticon?: JSX.Element;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  className,
  lefticon,
  title = "Home",
}: ButtonProps) {
  return (
    <button
      className={`relative flex items-center group hover:bg-color5 rounded-md font-medium h-10 w-full py-2 px-3 ${className}`}
    >
      <div className="left-3 absolute">{lefticon}</div>
      <span className="ml-4 absolute left-8 font-medium text-base text-[#344054] leading-6 group-hover:text-color3 group-hover:font-bold">
        {title}
      </span>
    </button>
  );
}
