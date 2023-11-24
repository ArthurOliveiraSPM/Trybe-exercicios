import './App.css'
import {Header, Container} from "./styles.tsx";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* Aqui criamos um reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #333;
}

h1 {
  color: white;
}
`

function App() {



  return(
  <>
    <GlobalStyle />

    <Header>
      <h1>Título</h1>
    </Header>
  
    <Container>
      <p>Conteúdo</p>
    </Container>
  </>
)
}

export default App
