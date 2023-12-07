# Conteudo

- Criar uma store para armazenar o estado de uma aplicação.
- Utilizar Reducers, Actions e a função dispatch() para atualizar a store.
- Utilizar a função getState() para ler dados da store.

## Por que utilizar

Supondo que tem uma aplicação de 5 niveis de filhos, e tu quer colocar os dados do nivel 1 pro nivel 5.
Hoje em dia, seria necessário passar os dados via props pelo nivel 2,3,4 até chegar no 5.
Isso é chamado de prop drilling, e tem como corrigir isso com o redux. O redux cria um Estado Global que pode ser utilizaado em todos os niveis da aplicação.

### Redux

Para endender melhor como funciona o redux, é preciso entender os conceitos de store, reducer e actions, também a função de ler um estado getState() e a de escrever o estado chamada dispatch().

- store
é o estado global é criado atraves da função createStore(), geralmente é atribuido a uma constante chamado store.
const store = createStore(reducer);

- reducer
é uma função que recebe 2 paremetros, o estado e a action. Essa função sempre retorna o estado.
const reducer = (state, action) => state

- action e dispatch
actions é um objeto que irá descrever qual a ação está acontecendo na nossa aplicação.
const action = {
  type: 'INCREMENT_COUNTER'
};

Com a action criada é necessário disparala para o store, e isso é feito através do dispatch. -> store.dispatch()

Basicamente, a action é o pedido de alteração do estado, e o dispatch é utilizado para realizar o pedido.

<https://content-assets.betrybe.com/prod/420d17aa-4478-482c-bbc5-63bdca330181-part-2-concepts-data-flow.gif>
