"use client";

import React from "react";
import { filteredController } from "../hooks/filteredController";
import { ApplicationList } from "../mocks/ApplicationList";
import { Button, Filtered } from "../components";
import { sortedListDate, sortedListPrice } from "../mocks/SortBy";
import SortBy from "./components/SortBy";
import PriceFiltered from "./components/PriceFiltered";
import ApplicationCard from "./components/ApplicationCard";

const Home = () => {
  const [selectedCountry, setSelectedCountry] = React.useState<string[]>([]);
  const [selectedUniversity, setSelectedUniversity] = React.useState<string[]>(
    []
  );
  const [selectedDuration, setSelectedDuration] = React.useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = React.useState<string[]>([]);
  const [priceSorted, setPriceSorted] = React.useState({
    minPrice: "",
    maxPrice: "",
  });
  const [selectedSorteds, setSelectedSorteds] = React.useState({
    price: "",
    date: "",
  });

  return (
    <div className="flex w-full h-screen items-center">
      <div className="w-64 h-screen bg-gray-200 rounded-lg bg-white  border border-gray-300 p-8 overflow-y-auto space-y-4">
        <SortBy
          {...{
            text: "Price",
            data: sortedListPrice,
            onChange: (e) => {
              setSelectedSorteds({ ...selectedSorteds, price: e.target.value });
            },
          }}
        />
        <SortBy
          {...{
            text: "Date",
            data: sortedListDate,
            onChange: (e) => {
              setSelectedSorteds({ ...selectedSorteds, date: e.target.value });
            },
          }}
        />
        <PriceFiltered {...{ priceSorted, setPriceSorted }} />
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
        <button className="bg-common-primary text-white p-2 rounded-lg w-full">
          Apply Now
        </button>
      </div>

      <ApplicationCard />
    </div>
  );
};

export default Home;
