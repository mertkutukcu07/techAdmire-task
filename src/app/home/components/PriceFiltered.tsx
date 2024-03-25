import React from "react";

const PriceFiltered = ({ maxPrice, minPrice, setMaxPrice, setMinPrice }) => {
  return (
    <div className="mt-4 mb-4">
      <text>Price Filtered</text>
      <div className="flex space-x-4 w-full justify-between">
        <input
          type="text"
          placeholder="Min "
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full h-10 bg-input-bg px-4 border border-gray-100 rounded-lg focus:outline-none"
          maxLength={5}
        />
        <input
          type="text"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full h-10 bg-input-bg px-4 border border-gray-100 rounded-lg focus:outline-none"
          maxLength={5}
        />
      </div>
    </div>
  );
};

export default PriceFiltered;
