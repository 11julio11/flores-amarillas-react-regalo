import { useState } from 'react';
import Greeting from './components/Greeting';
import FlowerAnimation from './components/FlowerAnimation';

function App() {
  const [showFlowers, setShowFlowers] = useState(false);

  return (
    <>
      {!showFlowers ? (
        <Greeting onStart={() => setShowFlowers(true)} />
      ) : (
        <FlowerAnimation />
      )}
    </>
  );
}

export default App;
