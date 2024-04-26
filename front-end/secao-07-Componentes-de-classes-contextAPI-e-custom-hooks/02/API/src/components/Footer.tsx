import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Footer() {
  const themeContext = useContext(ThemeContext);
  return <footer>Tema atual: {themeContext.theme}</footer>;
}

export default Footer;

//No exemplo acima, o hook useContext() é chamado, passa como parâmetro o Context ThemeContext e atribui a uma variável. 
// Com isso, a constante themeContext terá o mesmo valor que foi definido na prop value do ThemeContext.Provider