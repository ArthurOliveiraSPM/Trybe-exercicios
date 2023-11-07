# Conteudo Tratado hoje

Identificar e criar componentes puros.
Tratar efeitos colaterais nas aplicações React.
Utilizar o hook useEffect.
Identificar etapas do ciclo de renderização de um componente React.

## Por que isso é importante?

Durante o desenvolvimento de aplicações React, é comum que você precise conectar sua aplicação a sistemas externos. Um exemplo disso, já observado na Trybe, é a necessidade de realizar chamadas à APIs.

Em aplicações React, não é possível simplesmente executar as funções que realizam requisições externas no corpo dos componentes. Ao fazer isso, por conta do ciclo de renderização, a aplicação entrará em um loop, o que provocará um comportamento indesejado.

Portanto, hoje você vai estudar o hook useEffect, que serve para que seu componente capture efeitos em sua aplicação. Além disso, ele permitirá a seu componente que se conecte com sistemas externos, como APIs.

### Conteudos

Componente Puro:
Um componente puro é aquele que, se não houver alterações nos valores do estado ou das props, ele sempre irá retornar o mesmo JSX.
Um componente impuro é aquele que, por conta de um efeito colateral, ele retornará um JSX diferente a cada renderização, mesmo sem alterações em suas props ou estados.

Como resolver efeitos colaterais?
Uma forma de evitar esse problema é criar funções handlers. Por exemplo, é possível fazer com que a função fetch seja chamada em uma função handleClick. Dessa forma, a função seria executada apenas quando você clicasse em um botão.

Mas, a depender da aplicação, isso pode não ser interessante. Assim como no exemplo apresentado, talvez o componente queira buscar a informação apenas uma vez, no momento de sua primeira renderização.
Para isso existe o useEffect;

### useEffect

Diferentemente do hook useState, o useEffect não retorna nada;
portanto o que importa são os argumentos passados nele:

- O primeiro argumento deverá ser uma função (callback).
- O segundo argumento, que é opcional, deverá ser um array, chamado de array de dependências.

Existem 4 maneiras de utilizar o useEffect:

- useEffect sem segundo argumento:
useEffect(() => {});
Irá executar repetidas vezes o e sempre que o componente sofrer alteração. CUIDADO pode gerar loops

- useEffect com o segundo argumento sendo um array vazio
useEffect(() => {}, []);
Executa APENAS na PRIMEIRA renderização do componente

- useEffect com o segundo argumento sendo um array com itens
useEffect(() => {}, [foo, bar, ...baz]);
Vai ser executado na primeira renderização e quando um dos itens do array sofrer alteração.
 importante colocar no array de dependências variáveis que você está utilizando dentro da função callback: isso evita que tenham variáveis desatualizadas no callback.

- useEffect com a callback retornando uma função
useEffect(() => {
  return () => {};
}, []);
Nessa caso, o useEffect está retornando uma nova função, chamada de função cleanup. A função cleanup será executada:

- No momento da desmontagem do componente.
- No momento anterior à próxima execução da callback, em que o componente é renderizado novamente.
Você poderá utilizar a função cleanup sempre que precisar limpar algo criado com efeito colateral (por exemplo um setInterval() ou setTimeout()).

Resumindo:

- Quando disparado, o useEffect executa a função que recebe como primeiro parâmetro.
- Se não receber um segundo parâmetro, o useEffect executará a função sempre que o componente for renderizado.
- Se receber um array vazio como segundo parâmetro, o useEffect executará a função somente quando o componente for montado.
- Quando o useEffect recebe um array com valores dentro, a função é executada sempre que algum desses valores é alterado.
- Se o primeiro parâmetro retornar uma função, essa função será executada quando o componente for desmontado, também antes da próxima renderização.

É comum o useEffect ser utilizado emexcesso, então temos que adicionar ele apenas quando necessário.
Esse tipo de confusão é mais comum ao utilizar uma lista de dependências como segundo parâmetro do useEffect. Para evitar isso, é interessante adicionar nessa lista apenas elementos primitivos(que são strings,numbers e tal, sem objetos ou arrays).

