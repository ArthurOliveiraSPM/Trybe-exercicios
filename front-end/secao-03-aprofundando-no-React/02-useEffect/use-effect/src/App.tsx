import { useEffect, useState } from 'react';
import Greeting from './components/Greeting';
import './App.css';
import fetchCoordinates from './services';


type Coordinates = {
  latitude: number;
  longitude: number;
};

function App() {
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [cordenadas, setCordenadas] = useState<Coordinates | null>(null);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCordenadas({ latitude: data.latitude, longitude: data.longitude });
      setLoading(false);
    }
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 3000);

    return () => { // Essa é a função cleanup
      clearInterval(intervalId);
    };
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
    
      <>
    <h1>International Space Station Location Tracker</h1>
    {cordenadas && (
      <>
        <h2>{`Latitude: ${cordenadas.latitude}`}</h2>
        <h2>{`Longitude: ${cordenadas.longitude}`}</h2>
      </>
    )}
  </>
    <div className="App">
      <Greeting name="Maria" />
      <Greeting name="Miguel" />
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <h3>{counter}</h3>
    </div>
    </>
  );
}

export default App;
