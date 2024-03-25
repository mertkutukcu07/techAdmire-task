import React from "react";
import Applications from "./Applications";

const ApplicationCard = ({ applicationList }) => {
  return (
    <div>
      {
        <div
          className="
          sm:grid sm:grid-cols-2 sm:gap-4
          md:grid md:grid-cols-3 md:gap-4
          lg:grid lg:grid-cols-4 lg:gap-4
          xl:grid xl:grid-cols-5 xl:gap-4
          2xl:grid 2xl:grid-cols-6 2xl:gap-4
          space-y-4
          h-screen
          overflow-y-auto
          "
        >
          {applicationList.map((item, index) => {
            return <Applications {...{ item, index }} />;
          })}
        </div>
      }
    </div>
  );
};

export default ApplicationCard;
