import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

function Layout() {
  return (
    <>
      <NavBar />
    <Outlet />
      <footer>
        <span>Trybe - todos os direitos reservados</span>
      </footer>
    </>
  )
}

export default Layout;

// O componente Layout, por sua vez, renderiza o componente Outlet;

// O React Router irá substituir o Outlet pelo componente especificado em cada rota. 
// Por exemplo, ao acessar a rota /coffee, a aplicação vai renderizar o componente Layout mas, 
// no lugar de Outlet, é o componente CoffeeList que será renderizado.

// Ao acessar uma rota que não existe, a aplicação vai renderizar o componente NotFound. 
// Como a rota com path="/*" não é filha do Route pai, 
// o menu de navegação e o footer não serão renderizados.

