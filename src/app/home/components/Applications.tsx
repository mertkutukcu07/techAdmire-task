import React from "react";

const Applications = ({ item, index }) => {
  return (
    <div
      key={`${index}-${item.name}-application
    `}
      className="bg-white shadow-lg rounded-lg p-4"
    >
      <div className="text-lg font-semibold">{item.name}</div>
      <div className="text-sm">{item.university}</div>
      <div className="text-sm">{item.country}</div>
      <div className="text-sm">{item.language}</div>
      <div className="text-sm">{item.duration}</div>
      <div className="text-sm">{item.applicationDeadlineDate}</div>
      <div className="text-sm">{`$${item.cost}`}</div>
    </div>
  );
};

export default Applications;
