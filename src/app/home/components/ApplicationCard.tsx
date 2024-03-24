import React from "react";
import { ApplicationList } from "../../mocks/ApplicationList";

const ApplicationCard = ({}) => {
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
          {ApplicationList.map((item) => {
            return (
              <div key={item.id} className="bg-white shadow-lg rounded-lg p-4">
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-sm">{item.university}</div>
                <div className="text-sm">{item.country}</div>
                <div className="text-sm">{item.language}</div>
                <div className="text-sm">{item.duration}</div>
                <div className="text-sm">{item.applicationDeadlineDate}</div>
                <div className="text-sm">{item.cost}</div>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default ApplicationCard;
