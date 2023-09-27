import React, { useState } from 'react';

function ManaFilterMenu({ selectedMana, onFilterChange }) {
  const [activeMana, setActiveMana] = useState(selectedMana);

  const handleManaButtonClick = (manaValue) => {
    if (activeMana === manaValue) {
      // Si le bouton est déjà actif, désactivez-le en appelant la fonction onFilterChange avec une valeur vide.
      setActiveMana(null);
      onFilterChange(null); // Vous pouvez également utiliser une autre valeur vide comme '' à la place de null si nécessaire.
    } else {
      // Sinon, activez le bouton et mettez à jour l'état actif.
      setActiveMana(manaValue);
      onFilterChange(manaValue);
    }
  };

  return (
        <div className="mana-filter-menu">

      <button
        className={`btn btn-primary btn-sm ${activeMana === '0' ? 'active' : ''}`}
        onClick={() => handleManaButtonClick('0')}
      >
        0
      </button>

      <img 
        height='40px' 
        src='images/mana/mana1.png'
        className={`${activeMana === '1' ? 'active' : ''} icone-mana`}
        onClick={() => handleManaButtonClick('1')}
      />

      <img 
        height='40px' 
        src='images/mana/mana2.png'
        className={`${activeMana === '2' ? 'active' : ''} icone-mana`}
        onClick={() => handleManaButtonClick('2')}
      />
        

      <img 
        height='40px' 
        src='images/mana/mana3.png'
        className={`${activeMana === '3' ? 'active' : ''} icone-mana`}
        onClick={() => handleManaButtonClick('3')}
      />

      <img 
        height='40px' 
        src='images/mana/mana4.png'
        className={`${activeMana === '4' ? 'active' : ''} icone-mana`} 
        onClick={() => handleManaButtonClick('4')}
      />

      <button
        className={`btn btn-primary btn-sm ${activeMana === '5' ? 'active' : ''} icone-mana`}
        onClick={() => handleManaButtonClick('5')}
      >
        5
      </button>

    </div>
  );
}

export default ManaFilterMenu;