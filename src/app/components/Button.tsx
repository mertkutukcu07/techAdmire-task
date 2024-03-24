import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
  isLoading?: boolean;
}

const Button = ({ onClick, text, isLoading }: ButtonProps) => {
  return (
    <button
      disabled={isLoading}
      className="w-72 px-2 py-2 bg-common-primary px-4 border border-gray-100 rounded-lg flex align-center justify-center"
    >
      <text className="text-white text-sm font-semibold">{text}</text>
    </button>
  );
};

export default Button;
