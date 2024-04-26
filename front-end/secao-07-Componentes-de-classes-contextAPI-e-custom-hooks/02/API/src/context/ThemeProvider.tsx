import { useState } from 'react';
import ThemeContext from './ThemeContext';

type ThemeProviderProps = {
  children: React.ReactNode;
}


function ThemeProvider({ children }: ThemeProviderProps) {
  const [pageTheme, setPageTheme] = useState<'dark' | 'light'>('dark');

  function toggleTheme() {
    setPageTheme(pageTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme: pageTheme, toggleTheme }}>
      <div className={ pageTheme }>
        { children }
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

//No código acima, utiliza-se a prop children de forma que o componente ThemeProvider encapsule todos os componentes-filho. 
// Isso significa que os componentes aninhados serão embrulhados pelo ThemeContext.Provider e poderão acessar os dados do Context.

