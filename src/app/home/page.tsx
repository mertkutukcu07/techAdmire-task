"use client";

import React from "react";
import { filteredController } from "../hooks/filteredController";
import {
  ApplicationList,
  ApplicationListTypes,
} from "../mocks/ApplicationList";
import { Filtered } from "../components";
import { sortedListDate, sortedListPrice } from "../mocks/SortBy";
import SortBy from "./components/SortBy";
import PriceFiltered from "./components/PriceFiltered";
import ApplicationCard from "./components/ApplicationCard";
import { filteredList, useFilteredList } from "../hooks/filteredList";

const Home = () => {
  const [selectedCountry, setSelectedCountry] = React.useState<string[]>([]);
  const [selectedUniversity, setSelectedUniversity] = React.useState<string[]>(
    []
  );
  const [selectedDuration, setSelectedDuration] = React.useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = React.useState<string[]>([]);
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [priceSorted, setPriceSorted] = React.useState<string>("");
  const [dateSorted, setDateSorted] = React.useState<string>("");
  const [applicationList, setApplicationList] =
    React.useState<ApplicationListTypes[]>(ApplicationList);

  const filteredList = useFilteredList(
    ApplicationList,
    selectedCountry,
    selectedUniversity,
    selectedDuration,
    selectedLanguage,
    minPrice,
    maxPrice,
    priceSorted,
    dateSorted
  );

  const handleFilter = () => {
    setApplicationList(filteredList);
  };
  return (
    <div className="flex w-full h-screen items-center">
      <div className="w-64 h-screen bg-gray-200 rounded-lg bg-white  border border-gray-300 p-8 overflow-y-auto space-y-4">
        <SortBy
          {...{
            text: "Price",
            data: sortedListPrice,
            onChange: (e) => {
              setPriceSorted(e.target.value);
            },
          }}
        />
        <SortBy
          {...{
            text: "Date",
            data: sortedListDate,
            onChange: (e) => {
              setDateSorted(e.target.value);
            },
          }}
        />
        <PriceFiltered {...{ maxPrice, minPrice, setMaxPrice, setMinPrice }} />
        <Filtered
          key={`${selectedCountry}-${selectedUniversity}-${selectedLanguage}-country`}
          items={filteredController(ApplicationList).country}
          selectedItems={selectedCountry}
          setSelectedItems={setSelectedCountry}
          chapterName="Country"
        />
        <Filtered
          key={`${selectedCountry}-${selectedUniversity}-${selectedLanguage}-university`}
          items={filteredController(ApplicationList).university}
          selectedItems={selectedUniversity}
          setSelectedItems={setSelectedUniversity}
          chapterName="University"
        />
        <Filtered
          key={`${selectedCountry}-${selectedUniversity}-${selectedLanguage}-duration`}
          items={filteredController(ApplicationList).duration}
          selectedItems={selectedDuration}
          setSelectedItems={setSelectedDuration}
          chapterName="Duration"
        />
        <Filtered
          key={`${selectedCountry}-${selectedUniversity}-${selectedLanguage}-language`}
          items={filteredController(ApplicationList).language}
          selectedItems={selectedLanguage}
          setSelectedItems={setSelectedLanguage}
          chapterName="Language"
        />
        <button
          onClick={handleFilter}
          className="bg-common-primary text-white p-2 rounded-lg w-full"
        >
          <text>Apply Now</text>
        </button>
      </div>
      <ApplicationCard {...{ applicationList }} />
    </div>
  );
};

export default Home;
