import React from 'react';

function AllegianceFilterMenu({ selectedAllegiance, onFilterChange }) {
  const handleAllegianceChange = (event) => {
    const allegiance = event.target.value;
    onFilterChange(allegiance);
  };

  return (
    <div className="allegiance-filter-menu">
      <select
        className="form-select css-input"
        value={selectedAllegiance}
        onChange={handleAllegianceChange}
      >
        <option value="">Toutes les allégeances</option>
        <option value="Destin">Destin</option>
        <option value="Equilibre">Equilibre</option>
        <option value="Loi">
          <img src="images/allegiances/loi.png" alt="Loi" />
          Loi
        </option>
        <option value="Vice">Vice</option>
        {/* Ajoutez d'autres options pour les autres allégeances */}
      </select>
    </div>
  );
}

export default AllegianceFilterMenu;