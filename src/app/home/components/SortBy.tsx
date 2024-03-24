import React from "react";

const SortBy = ({ text, data, onChange }) => {
  return (
    <React.Fragment>
      <text>Sort By {text}</text>
      <select
        className="w-full h-10 bg-input-bg px-4 border border-gray-100 rounded-lg focus:outline-none"
        onChange={onChange}
      >
        {data.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default SortBy;
