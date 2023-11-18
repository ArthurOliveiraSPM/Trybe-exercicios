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

## queries
utilizando getBy... vai sempre buscar tudo que estiver na tela, se buscar e encontrar mais de 1 elemento irá retornar erro.
para buscar todos os elementos da tela deve utilizar o getAllBy... ai ao inves de retornar um elementoHTML retora uma lista

o getByTestId é o que utilizamos nos projetos, precisamos colocar ele como no codigo para o componente a ser verificado.

## user-event
O user-event é uma biblioteca complementar à React Testing Library (RTL) que possibilita a simulação de várias interações com o navegador.
Por um lado, um fireEvent.change(input, { target: { value: 'hello world' } }) dispara um evento de alteração do campo de input. Por outro, um userEvent.type(input, 'hello world') testará interações keyDown, keyPress e keyUp para cada caractere digitado. Portanto é uma boa prática, e altamente recomendado, utilizar userEvent em vez de fireEvent, sempre que possível.

