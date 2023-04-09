import React, { useState, useRef } from "react";
import "./AdvancedSearch.css";

function AdvancedSearch(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState("");
  const [classification, setClassification] = useState("");
  const [medium, setMedium] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");

  const advancedSearchRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = advancedSearchRef.current.value;
    props.handleSearch(query);
    advancedSearchRef.current.value = "";
  };

  const validateYear = (year) => {
    return /^[1-9]\d{3}$/.test(year);
  };

  return (
    <div className="advanced-search">
      <h2> Advanced Search </h2>{" "}
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="search-query"> Search query: </label>{" "}
        <input
        id="search-query"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        ref={advancedSearchRef}
        />{" "}
        </div>{" "}
        <div className="form-field">
          <label htmlFor="department"> Department: </label>{" "}
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value=""> Any department </option>{" "}
            <option value="1"> American Decorative Arts </option>{" "}
            <option value="2"> American Paintings and Sculpture </option>{" "}
            <option value="3"> Ancient Near Eastern Art </option>{" "}
            <option value="4"> Arms and Armor </option>{" "}
            <option value="5">
              {" "}
              Arts of Africa, Oceania, and the Americas{" "}
            </option>{" "}
            <option value="6"> Asian Art </option>{" "}
            <option value="7"> Costume Institute </option>{" "}
            <option value="8"> Drawings and Prints </option>{" "}
            <option value="10"> Egyptian Art </option>{" "}
            <option value="11"> European Paintings </option>{" "}
            <option value="12"> European Sculpture and Decorative Arts </option>{" "}
            <option value="13"> Greek and Roman Art </option>{" "}
            <option value="14"> Islamic Art </option>{" "}
            <option value="15"> The Robert Lehman Collection </option>{" "}
            <option value="16"> Medieval Art </option>{" "}
            <option value="17"> Musical Instruments </option>{" "}
            <option value="18"> Photographs </option>{" "}
            <option value="19"> Modern and Contemporary Art </option>{" "}
          </select>{" "}
        </div>{" "}
        <div className="form-field">
          <label htmlFor="classification"> Classification: </label>{" "}
          <select
            id="classification"
            value={classification}
            onChange={(e) => setClassification(e.target.value)}
          >
            <option value=""> Any classification </option>{" "}
            <option value="1"> Paintings </option>{" "}
            <option value="2"> Sculpture </option>{" "}
            <option value="3"> Drawings </option>{" "}
            <option value="4"> Prints </option>{" "}
            <option value="5"> Photographs </option>{" "}
            <option value="6"> Costumes </option>{" "}
            <option value="7"> Jewelry </option>{" "}
            <option value="8"> Textiles </option>{" "}
            <option value="9"> Arms and Armor </option>{" "}
            <option value="10"> Musical Instruments </option>{" "}
            <option value="11"> Tools and Equipment </option>
            <option value="12"> Furniture and Woodwork </option>{" "}
            <option value="13"> Glass and Ceramics </option>{" "}
            <option value="14"> Metalwork </option>{" "}
            <option value="15"> Scientific Instruments </option>{" "}
            <option value="16"> Toys and Games </option>{" "}
            <option value="17"> Coins and Medals </option>{" "}
            <option value="18"> Books and Manuscripts </option>{" "}
            <option value="19"> Film and Media </option>{" "}
            <option value="20"> Installation Art </option>{" "}
            <option value="21"> Performance Art </option>{" "}
          </select>{" "}
        </div>{" "}
        <div className="form-field">
          <label htmlFor="medium"> Medium: </label>{" "}
          <input
            id="medium"
            type="text"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
          />{" "}
        </div>{" "}
        <div className="form-field">
          <label htmlFor="min-year"> Min year: </label>{" "}
          <input
            id="min-year"
            type="text"
            value={minYear}
            onChange={(e) => {
              if (validateYear(e.target.value) || e.target.value === "") {
                setMinYear(e.target.value);
              }
            }}
          />{" "}
        </div>{" "}
        <div className="form-field">
          <label htmlFor="max-year"> Max year: </label>{" "}
          <input
            id="max-year"
            type="text"
            value={maxYear}
            onChange={(e) => {
              if (validateYear(e.target.value) || e.target.value === "") {
                setMaxYear(e.target.value);
              }
            }}
          />{" "}
        </div>{" "}
        <button type="submit"> Search </button>{" "}
      </form>{" "}
    </div>
  );
}

export default AdvancedSearch;
