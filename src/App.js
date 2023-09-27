// App.js
import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import './App.css';
import FilterMenu from './FilterMenu';
import CardGallery from './CardGallery';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardsData = [
  {
    image: '/images/eloise-elue-de-la-loi.jpg',
    mana: 0,
    allegiance: 'Loi',
    name: 'Eloïse élue de la Loi',
    type: 'élue',
    soustype: 'capitaine'
  },
  {
    image: '/images/aliyah-edd.jpg',
    mana: 0,
    allegiance: 'Destin',
    name: 'Aliyah élue du Destin'
  },
  {
    image: '/images/eloise-elue-des-dragons.jpg',
    mana: 0,
    allegiance: 'Loi',
    name: 'Eloïse élue des dragons'
  },
  {
    image: '/images/chevaucheur-de-drake.jpg',
    mana: 4,
    allegiance: 'Loi',
    name: 'Chevaucheur de drake'
  },
  {
    image: '/images/olquyana.jpg',
    mana: 5,
    allegiance: 'Loi',
    name: 'Olquyana'
  },
  {
    image: '/images/olgotsch-le-protecteur.jpg',
    mana: 3,
    allegiance: 'Loi',
    name: 'Olgotsch'
  },
  {
    image: '/images/R-uvarenth-joueur.jpg',
    mana: 1,
    allegiance: 'Loi',
    name: 'R\'uvarenth joueur'
  },
  {
    image: '/images/gardien-r-uvarenth.jpg',
    mana: 3,
    allegiance: 'Loi',
    name: 'Gardien R\'uvarenth'
  },
    {
    image: '/images/garde-de-la-loi.jpg',
    mana: 2,
    allegiance: 'Loi',
    name: 'Garde de la Loi'
  },
  {
    image: '/images/epee-des-justes.jpg',
    mana:3,
    allegiance: '',
    name: 'Epée des justes'
  },
  {
    image: '/images/etendard-des-braves.jpg',
    mana:3,
    allegiance: '',
    name: 'Etendard des Braves'
  },
  {
    image: '/images/petite-potion-de-soin.jpg',
    mana:1,
    allegiance: '',
    name: 'Petite potion de soin'
  },
  {
    image: '/images/capitaine-flamboyant.jpg',
    mana: 5,
    allegiance: 'Loi',
    name: 'Capitaine Flamboyant'
  },
  {
    image: '/images/protection-rapprochee.jpg',
    mana: 2,
    allegiance: 'Loi',
    name: 'Protection rapprochée'
  },
  // Ajoutez d'autres cartes ici
];

function App() {
  const [filteredMana, setFilteredMana] = useState('Toutes'); // Initialisation avec 'Toutes'
  const [filteredAllegiance, setFilteredAllegiance] = useState('Toutes'); // Initialisation avec 'Toutes'
  const [searchTerm, setSearchTerm] = useState(''); // Initialisation avec une chaîne vide

  const handleManaFilterChange = (manaValue) => {
    setFilteredMana(manaValue);
  };

  const handleAllegianceFilterChange = (allegiance) => {
    setFilteredAllegiance(allegiance);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    // effectuer des actions supplémentaires
    // lorsque les filtres changent, si nécessaire.
  }, [filteredMana, filteredAllegiance, searchTerm]);

  return (
    <div className="App">
      <HomePage />
      <h1>Eveil du Mana</h1>
      <FilterMenu
        onManaFilterChange={handleManaFilterChange}
        onAllegianceFilterChange={handleAllegianceFilterChange}
        onSearchChange={handleSearchChange}
      />
      <CardGallery
        cards={cardsData}
        filteredMana={filteredMana}
        filteredAllegiance={filteredAllegiance}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;