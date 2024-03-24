import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showEye?: boolean;
  setShowEye?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  showEye,
  setShowEye,
}: InputProps) => {
  const eyeShow = () => {
    if (!showEye) {
      return <EyeIcon color="#C9D2DA" width={25} />;
    } else {
      return <EyeSlashIcon color="#C9D2DA" width={25} />;
    }
  };

  return (
    <div className="w-72 h-10 bg-input-bg px-4 border border-gray-100 rounded-lg flex align-center justify-center ">
      <input
        type={showEye ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-full bg-transparent focus:outline-none text-sm"
      />
      {type === "password" && (
        <button onClick={() => setShowEye && setShowEye((prev) => !prev)}>
          {eyeShow()}
        </button>
      )}
    </div>
  );
};

export default Input;
