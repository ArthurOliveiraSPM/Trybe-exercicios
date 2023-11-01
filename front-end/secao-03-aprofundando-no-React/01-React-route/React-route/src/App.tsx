import { Link, Route, Routes } from 'react-router-dom'
import CoffeeList from './components/CoffeeList';
import Coffee from './components/Coffe';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Layout from './components/layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
           <Route index element={<Home />} />{/*  A rota que renderiza o componente Home possui a prop index. Isso indica que o componente Home será renderizado na mesma rota do Route pai. Alternativamente, seria possível indicar o caminho path="". */}
          <Route path="/coffees" element={<CoffeeList />} />
          <Route path="/coffees/:coffee" element={ <Coffee /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
      <Link to="/coffees">
        <button>Conheça nossos produtos</button>
      </Link>
    </>
  )
}

export default App;