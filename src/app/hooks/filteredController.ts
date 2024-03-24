import { ApplicationListTypes } from "../mocks/ApplicationList";

export const filteredController = (applicationList: ApplicationListTypes[]) => {
  const languageList = applicationList.map((item) => item.language);
  const uniqueLanguageList = Array.from(new Set(languageList));
  const universityList = applicationList.map((item) => item.university);
  const uniqueUniversityList = Array.from(new Set(universityList));
  const countryList = applicationList.map((item) => item.country);
  const uniqueCountryList = Array.from(new Set(countryList));
  const durationList = applicationList.map((item) => item.duration);
  const uniqueDurationList = Array.from(new Set(durationList));
  const filteredList = {
    language: uniqueLanguageList,
    university: uniqueUniversityList,
    country: uniqueCountryList,
    duration: uniqueDurationList,
  };
  return filteredList;
};
