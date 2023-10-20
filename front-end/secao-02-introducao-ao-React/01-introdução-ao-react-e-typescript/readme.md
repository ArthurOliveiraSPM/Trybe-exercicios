### Type script e React

<!-- Inicializar e estruturar um projeto em React com TypeScript.
Definir JSX como maneira de escrever tags HTML em JavaScript.
Criar elementos JSX.
Criar componentes React.
Utilizar componentes React. -->

#### Typescript
A principal diferença entre utilizar arquivos JavaScript (.js) ou TypeScript (.ts) é que, em .ts, todas as variáveis e constantes apresentam tipos definidos.

Caso seu código tenha algum erro nos tipos, o TypeScript não permitirá a ele que seja executado. Caso não encontre nenhum erro, o código será transpilado para JavaScript, ou seja, todo o código escrito será transformado em outro, somente com sintaxe JavaScript, e esse código transformado será executado.

#### Criando projeto com vite 
Arquivo index.html
É o ponto de entrada da aplicação e são poucos os casos em que é necessário alterar esse arquivo. Por padrão, ele faz a importação do script src/main.tsx, que é responsável por renderizar toda a aplicação React.

Arquivo src/main.tsx
É o responsável por renderizar e atualizar os elementos React. Ele faz isso por meio do ReactDOM, que, por padrão, renderiza o componente <App /> do arquivo src/App.tsx. Ainda, o componente App será renderizado na <div id="root"></div>, no arquivo index.html.

Arquivo src/App.tsx
É o primeiro componente React e corresponde à sua aplicação propriamente dita. É nele que você vai adicionar os principais elementos que vão compor sua aplicação. Além disso, todos os componentes da aplicação deverão ser chamados pelo App ou por seus componentes-filhos (há mais informações sobre componentes adiante no conteúdo).

Diretório public
Esse diretório conterá os arquivos estáticos e públicos. Isso significa que, ao colocar um arquivo nesse diretório, ele estará disponível para toda a aplicação, no endereço /nome-do-arquivo.

Hora de testar 💻: Experimente entrar no endereço http://localhost:5173/vite.svg enquanto sua aplicação estiver rodando.

Geralmente, são adicionados a essa pasta arquivos como favicons, robots.txt e manifest.json.

Diretório src/assets
Nesse diretório, são colocados outros arquivos estáticos necessários para a sua aplicação, como imagens, fontes e vídeos. Como os arquivos que estão aqui não são públicos, você precisará importá-los nos componentes que forem os utilizar.

Arquivo vite.config.ts
Aqui estão as configurações específicas do Vite. Nesse caso, está sendo utilizando o plugin React, que faz todas as transformações necessárias para que se possa utilizar a sintaxe tsx e outras funcionalidades.

Arquivo tsconfig.json
Todo projeto TypeScript precisa de um arquivo tsconfig.json, pois esse arquivo tem as configurações necessárias para que seja possível utilizar TypeScript em sua aplicação.

Arquivo tsconfig.node.json
Esse arquivo tem as configurações necessárias para que a aplicação TypeScript também consiga ser executada no ambiente de desenvolvimento, nesse caso usando node.

Arquivo vite-env.d.ts
Esse arquivo tem um triple slash que aplica algumas configurações e alguns tipos do próprio vite no TypeScript, a fim de que não seja necessário realizar configurações extras.

