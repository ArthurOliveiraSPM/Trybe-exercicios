import { useSelector } from 'react-redux'
import './App.css'

type RootState = {
  count: number
};

function App() {
  const count = useSelector((state: RootState) => state.count);
  //  const rootState = useSelector((state: RootState) => state);


  return (
    <>
      <h1>Contador</h1>
      <h2>{ count }</h2>
      {//<h2>{ rootState.count }</h2>
}
      <button>Incrementa 1</button>
      <button>Incrementa 5</button>
    </>
  )
}

export default App
