import React from "react";

interface FilteredProps {
  key: string;
  items: string[];
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  chapterName: string;
}

const selected = (selectedItems: string[], item: string) => {
  if (selectedItems.includes(item)) {
    return selectedItems.filter((selectedItem) => selectedItem !== item);
  } else {
    return [...selectedItems, item];
  }
};

const Filtered = ({
  items,
  selectedItems,
  setSelectedItems,
  chapterName,
}: FilteredProps) => {
  return (
    <div className="flex flex-col ">
      <text className="text-lg font-semibold text-gray-800 mb-2">
        {chapterName}
      </text>
      {items.map((item, index) => (
        <div
          key={index}
          className={`
          p-2
            cursor-pointer
            ${selectedItems.includes(item) ? "bg-common-primary" : ""}
          `}
          onClick={() => {
            setSelectedItems(selected(selectedItems, item));
          }}
        >
          <text
            className={`
            text-sm
            ${selectedItems.includes(item) ? "text-white" : "text-gray-800"}
          
          `}
          >
            {item}
          </text>
        </div>
      ))}
    </div>
  );
};

export default Filtered;
