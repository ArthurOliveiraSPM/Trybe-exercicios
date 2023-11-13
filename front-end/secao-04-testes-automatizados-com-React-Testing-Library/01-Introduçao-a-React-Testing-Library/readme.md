# O que será tratado hoje?
Utilizar os seletores (queries) da React Testing Library em testes automatizados;
Simular eventos com a React Testing Library em testes automatizados;
Testar fluxos lógicos assíncronos com a React Testing Library;
Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem a necessidade de serem alterados.

As vantagens da React Testing Library são:

Mais simples de usar;
Muito menos caveats, isto é, situações que podem causar pequenos problemas e dores de cabeça inesperadas;
Reforça o bom uso das melhores práticas de testes, incentivando e facilitando testes de comportamentos, e não os de implementação;
Permite a refatoração da arquitetura de componentes (com a Enzyme, qualquer mudança na arquitetura quebra parte dos testes).

## React Testing Library
A partir de agora, utilizando a RTL, vamos testar o comportamento da aplicação sob a perspectiva da pessoa usuária. Nosso objetivo é verificar se um elemento criado está efetivamente sendo exibido na tela. Essa abordagem é chamada de testes de integração. Com isso, seremos capazes de avaliar situações como:

A página possui um título específico;
A aplicação possui todos os campos de um formulário;
Em uma lista de tarefas, ao clicar no botão para adicionar uma nova tarefa, ela é renderizada corretamente.

