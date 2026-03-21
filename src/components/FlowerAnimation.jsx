
import React, { useRef, useEffect, useState } from 'react';
import { useLyrics } from '../hooks/useLyrics';
import '../assets/css/main.css';

export default function FlowerAnimation() {
  const audioRef = useRef(null);
  const { currentLyric, showTitle } = useLyrics(audioRef);

  
  const fullText = "🌻✨ Dicen que las flores amarillas traen suerte… pero yo sé que contigo ya la tengo toda. 💛 Aunque la U te estrese, tu brillo nunca se apaga 🌟.\n\nGracias por iluminar mis días, bollito hermoso 🐰💕. Este detalle es tuyo, porque ser la más hermosa del mundo merece premio 🏆🌼.";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (showTitle) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 35);
      return () => clearInterval(interval);
    }
  }, [showTitle]);

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', backgroundColor: 'var(--dark-color)', overflow: 'hidden', perspective: '1000px' }}>
      <audio ref={audioRef} src="sound/El Vega - Te encontre (Letra).mp3" autoPlay loop></audio>
      
      
      {showTitle && (
        <h1 className="titulo" style={!showTitle ? { animation: 'fadeOut 3s ease-in-out forwards' } : {}}>
          {typedText.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              {idx < typedText.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
      )}


      <div className="night"></div>

      {/* Falling Petals */}
      <div className="petals">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="petal" style={{
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 5 + "s",
            animationDuration: (4 + Math.random() * 4) + "s"
          }}></div>
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="shooting-stars">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="shooting-star" style={{
            top: Math.random() * 40 + "%",
            animationDelay: Math.random() * 7 + "s"
          }}></div>
        ))}
      </div>

      {/* Luciérnagas / Fireflies */}
      <div className="fireflies">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="firefly" style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDelay: Math.random() * 5 + "s",
          }}></div>
        ))}
      </div>

      
      <div className="flowers"><div className="flower flower--1">
        <div className="flower__leafs flower__leafs--1">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
          <div className="flower__line__leaf flower__line__leaf--5"></div>
          <div className="flower__line__leaf flower__line__leaf--6"></div>
        </div>
      </div>

      <div className="flower flower--2">
        <div className="flower__leafs flower__leafs--2">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--3">
        <div className="flower__leafs flower__leafs--3">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      
      <div className="flower flower--4">
        <div className="flower__leafs flower__leafs--1">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--5">
        <div className="flower__leafs flower__leafs--2">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--6">
        <div className="flower__leafs flower__leafs--3">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--7">
        <div className="flower__leafs flower__leafs--1">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--8">
        <div className="flower__leafs flower__leafs--2">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--9">
        <div className="flower__leafs flower__leafs--3">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--10">
        <div className="flower__leafs flower__leafs--1">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--11">
        <div className="flower__leafs flower__leafs--2">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--12">
        <div className="flower__leafs flower__leafs--1">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--13">
        <div className="flower__leafs flower__leafs--2">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--14">
        <div className="flower__leafs flower__leafs--3">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--15">
        <div className="flower__leafs flower__leafs--1">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--16">
        <div className="flower__leafs flower__leafs--2">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>
<div className="grow-ans" style={{ "--d": "0.90s" }}>
        <div className="flower__g-long">
          <div className="flower__g-long__top"></div>
          <div className="flower__g-long__bottom"></div>
        </div>
      </div>

      <div className="growing-grass">
        <div className="flower__grass flower__grass--1">
          <div className="flower__grass--top"></div>
          <div className="flower__grass--bottom"></div>
          <div className="flower__grass__leaf flower__grass__leaf--1"></div>
          <div className="flower__grass__leaf flower__grass__leaf--2"></div>
          <div className="flower__grass__leaf flower__grass__leaf--3"></div>
          <div className="flower__grass__leaf flower__grass__leaf--4"></div>
          <div className="flower__grass__leaf flower__grass__leaf--5"></div>
          <div className="flower__grass__leaf flower__grass__leaf--6"></div>
          <div className="flower__grass__leaf flower__grass__leaf--7"></div>
          <div className="flower__grass__leaf flower__grass__leaf--8"></div>
          <div className="flower__grass__overlay"></div>
        </div>
      </div>

      <div className="growing-grass">
        <div className="flower__grass flower__grass--2">
          <div className="flower__grass--top"></div>
          <div className="flower__grass--bottom"></div>
          <div className="flower__grass__leaf flower__grass__leaf--1"></div>
          <div className="flower__grass__leaf flower__grass__leaf--2"></div>
          <div className="flower__grass__leaf flower__grass__leaf--3"></div>
          <div className="flower__grass__leaf flower__grass__leaf--4"></div>
          <div className="flower__grass__leaf flower__grass__leaf--5"></div>
          <div className="flower__grass__leaf flower__grass__leaf--6"></div>
          <div className="flower__grass__leaf flower__grass__leaf--7"></div>
          <div className="flower__grass__leaf flower__grass__leaf--8"></div>
          <div className="flower__grass__overlay"></div>
        </div>
      </div>

      <div className="grow-ans" style={{ "--d": "1.80s" }}>
        <div className="flower__g-right flower__g-right--1">
          <div className="leaf"></div>
        </div>
      </div>

      <div className="grow-ans" style={{ "--d": "2.10s" }}>
        <div className="flower__g-right flower__g-right--2">
          <div className="leaf"></div>
        </div>
      </div>

      <div className="grow-ans" style={{ "--d": "2.10s" }}>
        <div className="flower__g-front">
          <div
            className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1"
          >
            <div className="flower__g-front__leaf"></div>
          </div>
          <div
            className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2"
          >
            <div className="flower__g-front__leaf"></div>
          </div>
          <div
            className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3"
          >
            <div className="flower__g-front__leaf"></div>
          </div>
          <div
            className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4"
          >
            <div className="flower__g-front__leaf"></div>
          </div>
          <div
            className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5"
          >
            <div className="flower__g-front__leaf"></div>
          </div>
          <div
            className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6"
          >
            <div className="flower__g-front__leaf"></div>
          </div>
          <div
            className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7"
          >
            <div className="flower__g-front__leaf"></div>
          </div>
          <div
            className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8"
          >
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__line"></div>
        </div>
      </div>

      <div className="grow-ans" style={{ "--d": "2.40s" }}>
        <div className="flower__g-fr">
          <div className="leaf"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
        </div>
      </div>

      <div className="long-g long-g--0">
        <div className="grow-ans" style={{ "--d": "2.25s" }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "1.65s" }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "2.55s" }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "2.70s" }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--1">
        <div className="grow-ans" style={{ "--d": "2.70s" }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "2.85s" }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "3.00s" }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "3.15s" }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--2">
        <div className="grow-ans" style={{ "--d": "3.00s" }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "3.15s" }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "3.30s" }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "3.45s" }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--3">
        <div className="grow-ans" style={{ "--d": "3.00s" }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "3.15s" }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "2.25s" }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "2.70s" }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--4">
        <div className="grow-ans" style={{ "--d": "3.00s" }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "3.15s" }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "2.25s" }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "2.70s" }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--5">
        <div className="grow-ans" style={{ "--d": "3.00s" }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "3.15s" }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "2.25s" }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "2.70s" }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--6">
        <div className="grow-ans" style={{ "--d": "3.15s" }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "3.30s" }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "3.45s" }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "3.60s" }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--7">
        <div className="grow-ans" style={{ "--d": "2.25s" }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "2.40s" }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "2.63s" }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ "--d": "2.70s" }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>
    </div>
    </div>
  );
}
