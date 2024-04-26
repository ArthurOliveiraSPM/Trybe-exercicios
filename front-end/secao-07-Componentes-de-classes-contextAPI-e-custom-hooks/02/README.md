# Commit Inicial API

Utilizar a Context API do React para gerenciar estado.

## Componentes Provider e Consumer

a função createContext retorna um objeto com dois componentes:

Provider: é responsável por “prover” os dados para os componentes que estão nos níveis abaixo dele na árvore de componentes. Ainda, ele aceita uma prop obrigatória value com os dados que serão compartilhados para todos os componentes abaixo dele. Esse valor pode ser qualquer valor JavaScript, como número, string, array ou objeto.
Consumer: é responsável por “consumir” os valores armazenados no Context. Também, é possível consumir os dados de um Context usando o Hook useContext, modo em que não é obrigatório o uso do Consumer.

normalmente, o Consumer é utilizado em componentes de classe. O useContext, por ser um hook e por ter uma implementação simplificada, é utilizado em componentes funcionais.

Criar um contexto
Criar o provider -> ele que vai injetar o contexto nos outros componentes

### Lendo os dados do Context

Para consumir um valor que está armazenado no Context, é necessário importá-lo no componente em que será usado. Para isso, utiliza-se o Hook useContext(). Essa função deve receber como parâmetro o Context criado anteriormente, o ThemeContext.

#### Extraindo o Provider para um componente

 Provider Pattern.

 Esse padrão nada mais é que extrair o Provider, bem como os dados e a lógica, para um componente próprio. Faça isso em sua aplicação e veja que o código ficará mais limpo
