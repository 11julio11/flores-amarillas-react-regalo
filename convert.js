const fs = require('fs');

const html = fs.readFileSync('old/flower.html', 'utf8');

// Extract .flowers div
const flowersMatch = html.match(/<div class="flowers">([\s\S]*?)<script src="anim.js"><\/script>/);
if (!flowersMatch) {
  console.error("Could not find flowers div");
  process.exit(1);
}

let flowersHtml = '<div className="flowers">' + flowersMatch[1].trim();

// Replace class with className
flowersHtml = flowersHtml.replace(/class=/g, 'className=');

// Replace style="--d: 1.2s" with style={{ "--d": "1.2s" }}
flowersHtml = flowersHtml.replace(/style="--d: (.*?)"/g, 'style={{ "--d": "$1" }}');

// Fix unclosed elements if any (divs are usually closed, br, hr, img, etc)
// Not many unclosed expected here.

const jsxContent = `
import React, { useRef, useEffect, useState } from 'react';
import { useLyrics } from '../hooks/useLyrics';
import '../assets/css/main.css';

export default function FlowerAnimation() {
  const audioRef = useRef(null);
  const { currentLyric } = useLyrics(audioRef);
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowTitle(false);
    }, 216000); // 216 seconds
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', backgroundColor: 'var(--dark-color)', overflow: 'hidden', perspective: '1000px' }}>
      <audio ref={audioRef} src="sound/ChristianBasso&HaienQiu-Flowers.mp3" autoPlay loop></audio>
      
      <div id="lyrics" style={{ opacity: currentLyric.opacity }}>
        {currentLyric.text}
      </div>
      
      {showTitle && (
        <h1 className="titulo" style={!showTitle ? { animation: 'fadeOut 3s ease-in-out forwards' } : {}}>
          Estas flores amarillas son un reflejo de la alegría que traes a mi vida. <br /> <br />
          Gracias por iluminar mis días con tu presencia.
        </h1>
      )}

      <div className="night"></div>
      
      ${flowersHtml}
      
    </div>
  );
}
`;

fs.writeFileSync('src/components/FlowerAnimation.jsx', jsxContent);
console.log("Component successfully generated!");
