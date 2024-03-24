import React from "react";

const AuthHeader = ({ text, description }) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-center">{text}</h1>
      <p className="w-64 text-sm text-center text-gray-400 mt-2">
        {description}
      </p>
    </div>
  );
};

export default AuthHeader;
