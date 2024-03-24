import React from "react";

const PriceFiltered = ({ priceSorted, setPriceSorted }) => {
  return (
    <div className="mt-4 mb-4">
      <text>Price Filtered</text>
      <div className="flex space-x-4 w-full justify-between">
        <input
          type="text"
          placeholder="Min "
          value={priceSorted.minPrice}
          onChange={(e) =>
            setPriceSorted((prev) => ({
              ...prev,
              minPrice: e.target.value,
            }))
          }
          className="w-full h-10 bg-input-bg px-4 border border-gray-100 rounded-lg focus:outline-none"
          maxLength={6}
        />
        <input
          type="text"
          placeholder="Max "
          value={priceSorted.maxPrice}
          onChange={(e) =>
            setPriceSorted((prev) => ({
              ...prev,
              maxPrice: e.target.value,
            }))
          }
          className="w-full h-10 bg-input-bg px-4 border border-gray-100 rounded-lg focus:outline-none"
          maxLength={6}
        />
      </div>
    </div>
  );
};

export default PriceFiltered;
