import { NavLink } from 'react-router-dom';
import './navbar.css'

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/coffees">Cafés</NavLink>
    </nav>
  )
}

export default NavBar;
