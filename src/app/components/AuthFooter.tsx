import React from "react";

const AuthFooter = ({ footerPress, text, authType }) => {
  return (
    <div className="mt-4 flex items-center justify-center ">
      <p className="text-gray-400 text-sm">{text}</p>
      <text
        onClick={footerPress}
        className="text-common-primary ml-1 cursor-pointer font-medium cursor-pointer"
      >
        {authType}
      </text>
    </div>
  );
};

export default AuthFooter;
