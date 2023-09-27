import React from 'react';
import ManaFilterMenu from './ManaFilterMenu';
import AllegianceFilterMenu from './AllegianceFilterMenu';

function FilterMenu({ onManaFilterChange, onAllegianceFilterChange, onSearchChange }) {
  return (
    <div className="filter-menu">
      <ManaFilterMenu onFilterChange={onManaFilterChange} />
      <AllegianceFilterMenu onFilterChange={onAllegianceFilterChange} />
      <div className="search-filter">
        <input
          type="text"
          id="search-input"
          placeholder="Rechercher"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default FilterMenu;