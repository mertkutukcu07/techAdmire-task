import { useState, useEffect } from "react";
import { ApplicationListTypes } from "../mocks/ApplicationList";

export const useFilteredList = (
  ApplicationList: ApplicationListTypes[],
  selectedCountry: string[],
  selectedUniversity: string[],
  selectedDuration: string[],
  selectedLanguage: string[],
  minPrice: string,
  maxPrice: string,
  priceSorted: string,
  dateSorted: string
) => {
  const [filteredList, setFilteredList] = useState<ApplicationListTypes[]>([]);

  useEffect(() => {
    let list = ApplicationList.filter((item) => {
      const country = selectedCountry.length
        ? selectedCountry.includes(item.country)
        : true;
      const university = selectedUniversity.length
        ? selectedUniversity.includes(item.university)
        : true;
      const duration = selectedDuration.length
        ? selectedDuration.includes(item.duration)
        : true;
      const language = selectedLanguage.length
        ? selectedLanguage.includes(item.language)
        : true;
      const price =
        minPrice && maxPrice
          ? parseInt(item.cost.replace(",", "")) >= parseInt(minPrice) &&
            parseInt(item.cost.replace(",", "")) <= parseInt(maxPrice)
          : true;

      return country && university && duration && language && price;
    });

    if (priceSorted === "increasingPrice") {
      list.sort((a, b) => {
        return (
          parseInt(a.cost.replace(",", "")) - parseInt(b.cost.replace(",", ""))
        );
      });
    } else if (priceSorted === "decreasingPrice") {
      list.sort((a, b) => {
        return (
          parseInt(b.cost.replace(",", "")) - parseInt(a.cost.replace(",", ""))
        );
      });
    } else if (dateSorted === "increasingDate") {
      list.sort((a, b) => {
        return (
          new Date(a.applicationDeadlineDate).getTime() -
          new Date(b.applicationDeadlineDate).getTime()
        );
      });
    } else if (dateSorted === "decreasingDate") {
      list.sort((a, b) => {
        return (
          new Date(b.applicationDeadlineDate).getTime() -
          new Date(a.applicationDeadlineDate).getTime()
        );
      });
    }

    setFilteredList(list);
  }, [
    ApplicationList,
    selectedCountry,
    selectedUniversity,
    selectedDuration,
    selectedLanguage,
    minPrice,
    maxPrice,
    priceSorted,
    dateSorted,
  ]);

  return filteredList;
};
