import React from "react";
import CountryItem from "./CountryItem";

export default function CountriesList({ data }) {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap "
      }}
    >
      {data.map((country) => (
        <CountryItem
          key={country.id}
          id={country.id}
          name={country.name}
          capital={country.capital}
          image={country.img}
          description={country.description}
        />
      ))}
    </ul>
  );
}
