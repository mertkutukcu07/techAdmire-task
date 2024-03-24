export interface SortByProps {
  id: number;
  label: string;
  value: string;
}

export const sortedListPrice: SortByProps[] = [
  {
    id: 1,
    label: "Increasing Price",
    value: "increasingPrice",
  },
  {
    id: 2,
    label: "Decreasing Price",
    value: "decreasingPrice",
  },
];

export const sortedListDate: SortByProps[] = [
  {
    id: 1,
    label: "Increasing Date",
    value: "increasingDate",
  },
  {
    id: 2,
    label: "Decreasing Date",
    value: "decreasingDate",
  },
];
