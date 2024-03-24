import { AcademicCapIcon } from "@heroicons/react/16/solid";
import React from "react";

export const Header = () => {
  return (
    <div className="w-full h-16 bg-common-primary text-white flex items-center justify-between px-4 ">
      <div className="flex items-center space-x-2">
        <AcademicCapIcon className="h-6 w-6" />
        <h2 className="text-lg font-semibold mx-4">Tech Admire</h2>
      </div>
      <div>
        <h2 className="sm:text-sm md:text-lg font-semibold mx-4">
          Students Application System
        </h2>
      </div>
    </div>
  );
};
