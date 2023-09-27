### Spread Operator
O spread operator é representado por três pontos (...). Ele é uma funcionalidade do JavaScript que nos permite realizar várias operações úteis com arrays e objetos. Basicamente, ele nos permite “espalhar” os elementos de uma estrutura de dados em um novo contexto.
Ele pode ser utilizdo para copiar arrays, concatenar arrays, passar argumentos para funções

### Array.find()
O método find é utilizado para encontrar o primeiro elemento que satisfaça a condição passada e retornar o primeiro valor do array que corresponda a essa condição.

array.find(callback);
array.find(() => {
  // Lógica para verificar a condição
});

### Array.forEach()
Existem outras HOFs que iteram pelos arrays e retornam valores, como o map. O forEach é responsável por executar uma ação em cada elemento do array, mas não possui retorno.

O propósito principal do forEach é realizar alguma ação para cada elemento, sem precisar criar um novo array com os resultados. Ele percorre o array original e executa a função de callback para cada elemento, mas não cria um novo array com os resultados das operações.


array.forEach(() => {});

### Parâmetro Rest
O parâmetro rest em JavaScript permite que uma função receba um número variável de argumentos como um array. Isso significa que podemos passar quantos argumentos quisermos para a função sem precisar definir todos eles individualmente como parâmetros separados. Ele é uma feature do ES6 que permite que você agrupe informações em um só lugar.

Por exemplo, ao trabalhar com funções, você pode se deparar com a necessidade de inserir múltiplos parâmetros para executar um determinado código. Ao utilizar o rest, você consegue agrupar esses argumentos usando a sintaxe de três pontos(...). 

