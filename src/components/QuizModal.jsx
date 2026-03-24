import React, { useState, useEffect } from 'react';
import '../assets/css/quiz.css';

const questions = [
  "¿Tu primera impresión de mí fue buena o te caí mal al principio? 😏",
  "¿Atracción física o conexión mental primero? (Solo una).",
  "¿Qué es lo más atrevido que has hecho por alguien que te gusta? 🔥",
  "¿Prefieres que te conquisten o tomar tú el mando?",
  "La definitiva: ¿Crees que somos solo amigos o ya aceptaste que te pongo nerviosa? 😉"
];

export default function QuizModal({ onClose }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;
    if (timeLeft <= 0) {
      handleNext(''); // Time expired
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, finished]);

  const handleNext = () => {
    const val = document.getElementById('ans-input').value;
    setAnswers(prev => ({...prev, [currentQ]: val || 'Se acabó el tiempo...'}));

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setTimeLeft(45);
      setTimeout(() => {
        if(document.getElementById('ans-input')) document.getElementById('ans-input').value = '';
      }, 0);
    } else {
      setFinished(true);
    }
  };

  const getWhatsAppLink = () => {
    let msg = "Mis respuestas sinceras al Test de Conexión: %0A%0A";
    questions.forEach((q, i) => {
      msg += `${i+1}. ${q}%0A👉 ${answers[i] || 'Sin respuesta'}%0A%0A`;
    });
    return `https://wa.me/?text=${msg}`;
  };

  return (
    <div className="quiz-overlay">
      <div className="quiz-modal">
        <h2 className="quiz-title">Responde rápido mi oasis 🏜️💧✨</h2>
        
        {!finished ? (
          <div className="quiz-body">
            <p className="quiz-timer" style={{ color: timeLeft <= 5 ? '#ff4d4d' : '#ffcc00' }}>
              ⏱️ Te quedan {timeLeft} segundos
            </p>
            <p className="quiz-question">
              Pregunta {currentQ + 1} de 5: <br/><br/>
              <strong>{questions[currentQ]}</strong>
            </p>
            <textarea id="ans-input" className="quiz-input" placeholder="Escribe rápido tu respuesta aquí..." autoFocus />
            <button className="quiz-btn" onClick={handleNext}>Siguiente 🔥</button>
          </div>
        ) : (
          <div className="quiz-body">
            <p className="quiz-question">¡Misterio revelado! ✨<br/>Ahora tienes que ser valiente.</p>
            <p style={{fontSize: '1rem', color:'#fff', marginBottom:'20px'}}>Dale al botón de abajo para enviarme tus respuestas por WhatsApp antes de que te arrepientas. 😏</p>
            <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="quiz-btn wa-btn">
              Enviarme respuestas 📩
            </a>
            <button className="quiz-btn close-btn" onClick={onClose} style={{marginTop: '10px', background: 'transparent', border: '1px solid #777'}}>Volver a las flores</button>
          </div>
        )}
      </div>
    </div>
  );
}
