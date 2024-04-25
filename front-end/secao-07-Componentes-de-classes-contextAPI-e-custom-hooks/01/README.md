# Commit inicial

Criar componentes de classe.
Utilizar estado em componente de classe.
Utilizar o this para referenciar o próprio objeto.
Entender o ciclo de vida React.

## O que é uma classe?

Uma classe tem atributos e metodos

Atributos definem informações dos objetos:
Props e state

Metodos são as ações da clase:
render()
métodos relacionados aos ciclos de vida.

### Ciclo de Vida

Todo componente React tem um “ciclo de vida”, ou seja, eventos que acontecem desde o momento em que o componente aparece na tela até o momento em que ele é removido. Existem três principais fases nesse ciclo:

Quando o componente é montado.
Quando o componente é atualizado.
Quando o componente é desmontado.

Montagem do componente:
render - renderiza o componente, inserindo-o no DOM.
componentDidMount - dispara uma ou mais ações após o componente ser inserido no DOM (ideal para requisições).
Atualização do componente:
componentDidUpdate - dispara uma ou mais ações após o componente ser atualizado.
Desmontagem do componente:
componentWillUnmount - dispara uma ou mais ações antes de o componente ser desmontado.

Entenda o que acontece na aplicação:

Assim que o componente App é renderizado, ele executa o método componentDidMount que, por sua vez, realiza o fetch para buscar as informações em uma API.
Enquanto a requisição é feita, o componente Loading é renderizado.
Após o retorno da API, o estado isLoading é settado para false, o que faz com que o componente Loading seja desmontado.
Nesse momento, o método componentWillUnmount, definido no componente Loading, é executado.
