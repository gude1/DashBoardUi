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
      className={`relative flex items-center hover:text-color3 hover:bg-color5 rounded-md h h-10 w-full text-[#344054] py-2 px-3 ${className}`}
    >
      <div className="left-4 absolute">{lefticon}</div>
      <span className="ml-4 absolute  left-10 font-medium text-base leading-6">
        {title}
      </span>
    </button>
  );
}
