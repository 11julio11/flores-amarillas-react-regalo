import { useState, useEffect } from 'react';

export function useLyrics() {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    // Ocultar el título/dedicatoria después de 216 segundos (ajustable)
    const timeoutId = setTimeout(() => {
      setShowTitle(false);
    }, 216000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Devolvemos un objeto con formato compatible con el layout existente
  return { currentLyric: { text: "", opacity: 0 }, showTitle };
}
