import { Component, ReactNode } from 'react';
import './App.css'
import Title from './Title';


//Criar uma classe baseado em uma classe já existente do react, ou seja vamos utilizar coisas na App que estão na component
class App extends Component{
  render(){
    return(<h1>Ola</h1>)
  }
}
// toda classe precisa do render para funcionar, ele é um dos métodos herdados da React.Component

export class HelloWorld extends Component{
  render(): ReactNode {
      return(
        <><h1>Alegria</h1><h2>HelloWorld</h2></>
      )
  }
}
export default App;

//Reparou que foi utilizada a palavra extends? Isso significa que está sendo criada uma classe chamada HelloWorld, que estende a classe React.Component, ou seja, 
//a classe HelloWorld vai ter todos os métodos e atributos que a classe React.Component tem.

//processo de estender outra classe é chamado de herança. Pode-se dizer que HelloWorld herda os métodos e atributos de React.Component. 
//Além do que é herdado, pode-se criar outros métodos e atributos para HelloWorld se for necessário.

export class AppDois extends Component {
  //Definir métodos é similar com arrow functios, porém sem utilizar constante
  handleClick = () => {
    alert('clicou!');
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Clique!</button>
      </div>
    );
  }
}
//foi criado o método handleClick no corpo do componente. Perceba que, para acessar o método criado, é necessário capturá-lo no objeto this, 
//portanto, para executá-lo, você deve utilizar a sintaxe this.handleClick.

//Perceba que o método não foi definido como constante, diferentemente da implementação tradicional de uma arrow function.

export class Prop extends Component {
  render(): ReactNode {
      return <Title titleMessage='HelloWorld Prop'/>
  }
}


//Os componentes de classe têm um objeto chamado state, que está armazenado no objeto this. Por padrão, o state é inicializado com o valor null.
//Para definir o estado inicial de um componente, você pode utilizar a sintaxe Public Class Field. Basicamente, basta declarar o estado diretamente no corpo do componente:

export class ComponentEstado extends Component {
  //Declara o estado no corpo do componente
  state = {
    course: 'front-end',
    finished: false,
  };

  render() {
    //Para ler as informações armazenadas no estado de um componente, basta buscar a informação do objeto this.state:
    const { course } = this.state;
    return (
      <>
      <h1>{`Módulo: ${course}`}</h1>
    </>
    );
  }
}
//No exemplo acima, desestrutura-se o estado course do objeto this.state e renderiza-se seu texto.

//Para escrever no estado de um componente, você deve utilizar o método this.setState
// this.setState({
//   finished: true,
// });

//Ao executar o método acima, a aplicação vai alterar o valor do estado finished para true.
//método setState entende que, ao ser executado, apenas os valores descritos em seu argumento serão alterados. 
// Porém, assim como no estado de um componente funcional utilizando o hook useState, o estado é imutável. 
// Por trás dos panos, o método setState reescreve todo o estado, mas altera apenas os valores desejados.

export class ComponentBotao extends Component {
  state = {
    course: 'front-end',
    finished: false,
  };

  render() {
    const { course, finished } = this.state; // Desestrutura o objeto do estado
    return (
      <div className="App">
        <h1>{`Módulo: ${course}`}</h1> {/* Utiliza o atributo do objeto desestruturado para escrever*/}
        <button
          disabled={finished} //seta o atributo disable com o finished que tem valor false
          onClick={() => this.setState({ finished: true })} //Usa o this.setState para alterar o valor do estado, sem alterar os outros atributos(muda apenas o finished de flase para true)
        >
          Finalizar curso
        </button>
        {finished && <h2>Curso finalizado</h2>}
         {/*Condiciona o finished dizendo que se for true deve aparecer um texto  */}
      </div>
    );
  }
}
//Seria possivel alterar os 2 estados de uma vez:
// this.setState({
//   course: 'fundamentos',
//   finished: true,
// });

// O estado do componente não será alterado se você modificar o objeto this.state diretamente. Sempre use a função this.setState para alterar o estado de seu componente.


