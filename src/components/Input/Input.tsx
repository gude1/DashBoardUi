import React from "react";

export type InputProps = {
  lefticon?: JSX.Element;
  righticon?: JSX.Element;
  lefticonClick?: () => void;
  righticonClick?: () => void;
  parentClassName?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Input(props: InputProps): JSX.Element {
  return (
    <div
      className={`bg-transparent flex rounded-lg w-full overflow-hidden items-center  pl-2 transition-all   h-11 p-0 border border-color2 drop-shadow-none hover:border-color3 ${props.parentClassName}`}
    >
      {props.lefticon && (
        <button
          className="outline-none ml-2 mr-2"
          onClick={props.lefticonClick}
        >
          {props.lefticon}
        </button>
      )}
      <input
        className="w-full h-full outline-0 border-0 placeholder:text-color4 placeholder:font-normal placeholder:text-base text-color4 placeholder:leading-6 bg-white"
        placeholder="Email Address"
        {...props}
      />
      {props.righticon && (
        <button
          className="outline-none ml-4 mr-4"
          onClick={props.righticonClick}
        >
          {props.righticon}
        </button>
      )}
    </div>
  );
}
