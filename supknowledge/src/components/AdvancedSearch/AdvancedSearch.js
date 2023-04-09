import React, { useState } from 'react';
import './AdvancedSearch.css';

function AdvancedSearch({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [department, setDepartment] = useState('');
  const [classification, setClassification] = useState('');
  const [medium, setMedium] = useState('');
  const [minYear, setMinYear] = useState('');
  const [maxYear, setMaxYear] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = new URLSearchParams();
    if (searchQuery) searchParams.append('q', searchQuery);
    if (department) searchParams.append('departmentId', department);
    if (classification) searchParams.append('classificationId', classification);
    if (medium) searchParams.append('medium', medium);
    if (minYear && /^[1-9]\d{3}$/.test(minYear)) searchParams.append('minDate', minYear);
    if (maxYear && /^[1-9]\d{3}$/.test(maxYear)) searchParams.append('maxDate', maxYear);
    handleSearch(searchParams);
  };

  const validateYear = (year) => {
    return /^[1-9]\d{3}$/.test(year);
  };

  return (
    <div className="advanced-search">
      <h2>Advanced Search</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="search-query">Search query:</label>
          <input
            id="search-query"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="department">Department:</label>
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Any department</option>
            <option value="1">American Decorative Arts</option>
            <option value="2">American Paintings and Sculpture</option>
            <option value="3">Ancient Near Eastern Art</option>
            <option value="4">Arms and Armor</option>
            <option value="5">Arts of Africa, Oceania, and the Americas</option>
            <option value="6">Asian Art</option>
            <option value="7">Costume Institute</option>
            <option value="8">Drawings and Prints</option>
            <option value="10">Egyptian Art</option>
            <option value="11">European Paintings</option>
            <option value="12">European Sculpture and Decorative Arts</option>
            <option value="13">Greek and Roman Art</option>
            <option value="14">Islamic Art</option>
            <option value="15">The Robert Lehman Collection</option>
            <option value="16">Medieval Art</option>
            <option value="17">Musical Instruments</option>
            <option value="18">Photographs</option>
            <option value="19">Modern and Contemporary Art</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="classification">Classification:</label>
          <select
            id="classification"
            value={classification}
            onChange={(e) => setClassification(e.target.value)}>
            <option value="">Any classification</option>
            <option value="1">Paintings</option>
            <option value="2">Sculpture</option>
            <option value="3">Drawings</option>
            <option value="4">Prints</option>
            <option value="5">Photographs</option>
            <option value="6">Costumes</option>
            <option value="7">Jewelry</option>
            <option value="8">Textiles</option>
            <option value="9">Arms and Armor</option>
            <option value="10">Musical Instruments</option>
            <option value="11">Furniture and Woodwork</option>
            <option value="12">Ceramics</option>
            <option value="13">Glass</option>
            <option value="14">Metalwork</option>
            <option value="15">Coins and Medals</option>
            <option value="16">Architecture and Design</option>
            <option value="17">Film</option>
            <option value="18">Performance Arts</option>
            <option value="19">Other</option>
        </select>
    </div>
        <div className="form-field">
            <label htmlFor="medium">Medium:</label>
                <input
                $id="medium"
                type="text"
                value={medium}
                onChange={(e) => setMedium(e.target.value)}
                />
            </div>
        <div className="form-field">
            <label htmlFor="min-year">Min Year:</label>
                <input
                id="min-year"
                type="number"
                value={minYear}
                onChange={(e) => setMinYear(e.target.value)}
                />
        </div>
        <div className="form-field">
        <label htmlFor="max-year">Max year:</label>
        <input
            id="max-year"
            type="text"
            value={maxYear}
            onChange={(e) => setMaxYear(e.target.value)}
            onBlur={(e) => {
            if (e.target.value && !validateYear(e.target.value)) {
            alert('Invalid year format. Please enter a valid year in the format yyyy.');
            }
            }}
        />
        </div>
        <button type="submit">Search</button>
    </form>
    </div>
    );
}

export default AdvancedSearch;