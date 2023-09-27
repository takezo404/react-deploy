import React, { useState } from 'react';

function SearchFilter({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        id="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchFilter;