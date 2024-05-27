# Commit Inicial

## Hooks Customizados

Utilizar a Context API do React para gerenciar estado.

Criar hooks customizados.
Utilizar hooks customizados.

Para que utilizar hooks customizados? para aumentar a produtividade e evitar codigos repetitivos...

Após a introdução dos Custom Hooks, é possível reutilizar lógica entre diferentes componentes, sem repetição de código.

Por convenção, deve-se criar os Custom Hooks sempre iniciando com a palavra use (useMyCustomHook)
Assim, quando se encontra um componente React com a primeira letra maiúscula (MyComponent), já se sabe que ele retornará jsx.
E quando começar com use nós sabemos que se trata de um hook.

Custom Hooks só podem ser usados dentro de funções React.
Assim como um hook padrão, um Custom Hook só pode ser usado dentro de funções React, ou seja, em componentes ou outros hooks.
Não é possível usar um Custom Hook dentro de uma função JavaScript pura.

Um Custom Hook deve utilizar outros hooks em sua lógica.
Por exemplo, é bastante comum usar o useEffect ou o useState para gerenciar algum estado ou efeito dentro de um Custom Hook.

Se você criar uma função que não usa nenhum hook em sua lógica,
então ela não pode ser considerada um hook e, consequentemente,
não precisa seguir as convenções de um Custom Hook.

