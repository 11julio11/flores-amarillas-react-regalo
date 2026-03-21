import React from 'react';
import '../assets/css/style.css'; // Mantenemos el estilo original

export default function Greeting({ onStart }) {
  return (
    <div className="greeting-page" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      width: '100%',
      background: 'radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)',
      color: 'azure'
    }}>
      <div className="greetings">
        <span>H</span>
        <span>o</span>
        <span>l</span>
        <span>a</span>
        <span>!</span>
      </div>
      <div className="description">
        <span>ESTE DETALLE ES PARA TI :)</span>
      </div>
      <div className="button">
        <button className="botones" onClick={onStart} style={{ cursor: 'pointer' }}>
          <span style={{ color: '#fff', padding: '9px', backgroundColor: '#0a2be9', borderRadius: '80px', textDecoration: 'none' }}>CLICK AQUÍ</span>
        </button>
      </div>
    </div>
  );
}
