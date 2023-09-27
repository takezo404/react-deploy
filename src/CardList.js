import React from 'react';

function CardList({ cards }) {
  return (
    <div className="card-list">
      <h2>Liste des cartes</h2>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>{card.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CardList;