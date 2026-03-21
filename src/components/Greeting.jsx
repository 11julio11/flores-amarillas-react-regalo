import React from 'react';
import '../assets/css/greeting.css';

export default function Greeting({ onStart }) {
  return (
    <div className="greeting-container">
      {/* Orbes mágicos de fondo */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Contenedor central Glassmorphism */}
      <div className="greeting-content">
        <h1 className="greeting-title">
          Tengo una pequeña sorpresa mágica para mi bollito hermoso...
        </h1>
        <div className="botones" onClick={onStart}>
          <button className="btn-surprise">
            Descubrir mi sorpresa ✨
          </button>
        </div>
      </div>
    </div>
  );
}
