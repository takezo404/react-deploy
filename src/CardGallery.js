import React from 'react';
import Card from './Card';
import './styles.css';

function CardGallery({ cards, filteredMana, filteredAllegiance, searchTerm }) {
  const filteredCards = cards.filter((card) => {
    // Filtrage par mana
    const isManaMatched =
      !filteredMana ||
      filteredMana === 'Toutes' ||
      card.mana.toString() === filteredMana;

    // Filtrage par allégeance
    const isAllegianceMatched =
      !filteredAllegiance ||
      filteredAllegiance === 'Toutes' ||
      card.allegiance === filteredAllegiance;

    // Filtrage par recherche
    const isSearchMatched =
      !searchTerm 
      ||(card.name && card.name.toLowerCase().includes(searchTerm.toLowerCase()))
      ||(card.type && card.type.toLowerCase().includes(searchTerm.toLowerCase()))     
      ||(card.soustype && card.soustype.toLowerCase().includes(searchTerm.toLowerCase()))    
        ;

    // Afficher la carte uniquement si les trois conditions sont satisfaites
    return isManaMatched && isAllegianceMatched && isSearchMatched;
  });

  return (
    <div className="card-gallery">
      {filteredCards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          altText={card.name}
          className="card"
        />
      ))}
    </div>
  );
}

export default CardGallery;