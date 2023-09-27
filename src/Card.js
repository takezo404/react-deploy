import React, { useState } from 'react';
import './styles.css'; // Importez le fichier CSS de styles

function Card(props) {
  const [transform, setTransform] = useState('perspective(100px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    const calcX = -(e.clientY - box.y - box.height / 2) / 80;
    const calcY = (e.clientX - box.x - box.width / 2) / 80;
    const newTransform = `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
    setTransform(newTransform);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(100px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div
      className="card-game"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      <img height='400px' src={props.image} alt={props.altText} />
    </div>
  );
}

export default Card;