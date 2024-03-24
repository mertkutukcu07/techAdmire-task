import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({ onClick, text, isLoading, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-72 px-2 py-2 
      ${
        isLoading ? "bg-gray-300" : "bg-common-primary"
      } px-4 border border-gray-100 rounded-lg flex align-center justify-center`}
    >
      <text className="text-white text-sm font-semibold">
        {isLoading ? "Loading..." : text}
      </text>
    </button>
  );
};

export default Button;
