### Higher Order Functions
high order functions, é uma função que recebe como parametro outra função, tipo o que já é feito com os eventlisterners, que é tipo eventlistener('',(função) =>{}).

### Funções Callback
Anota aí 📝: callback é uma função passada por parâmetro ou executada dentro de outra função.


Passagem de função como argumento: Em JavaScript, as funções são tratadas como qualquer outro valor. Isso permite que você passe uma função como argumento para outra função;

Tratamento de eventos: As funções callback são comumente usadas para tratar eventos em JavaScript. Por exemplo, ao registrar um addEventListener() em um elemento HTML, você pode passar uma função callback que será executada quando o evento ocorrer, como um clique de botão ou uma tecla pressionada;

Customização de comportamento: As funções callback permitem que você personalize o comportamento de uma função chamadora. Por exemplo, em uma função de ordenação, você pode passar uma função callback para definir a lógica de comparação personalizada entre os elementos;

Iteração em arrays: Muitos métodos de array em JavaScript, como map(), filter(), forEach(), reduce(), aceitam funções callback como argumentos. Essas funções callback são chamadas uma vez para cada elemento do array, permitindo que você especifique a lógica personalizada a ser aplicada a cada elemento.

### Métodos de array em JavaScript
Segue uma visão geral de alguns exemplos dos métodos mais comuns para cada categoria:

Modificação do Array: push(), pop(), shift(), unshift();
Adição/Remoção de Elementos: splice(), slice();
Busca: indexOf(), includes();
Iteração: map(), filter(), find(), forEach(), sort(), reduce().

### Array.map()
O método map em JavaScript é um dos métodos de array que permite percorrer cada elemento de um array e criar um novo array com base em uma transformação realizada em cada elemento. Ele retorna um novo array contendo os resultados da aplicação de uma função callback a cada elemento do array original, preservando a ordem dos elementos.

Anota aí 📝: o método map retorna um array com o mesmo tamanho do array original 😜.

### Object Property Shorthand

Você já deve ter percebido que uma das vantagens do ES6 é que a nova sintaxe elimina códigos repetitivos, contribuindo para a limpeza do código. O Object Property Shorthand é um recurso muito útil na hora de declarar objetos em Javascript.

A sintaxe de Object Property Shorthand, ou “abreviação de propriedade de objeto”, em JavaScript é uma forma concisa de criar propriedades de objeto usando variáveis com o mesmo nome. Isso torna a definição de objetos mais limpa e legível.

Quando tem uma propriedade de um objeto com o mesmo nome do valor que você quer utilizar, da pra utilizar essa fita aqui.
Tipo assim:
const nome = arthur
const apelido = boneco;

const semOtimizar = {
 nome(nome da propriedade do objeto): nome(valor definido anteriormente);
 apelido(nome da propriedade do objeto): apelido(valor definido anteriormente);
}

const menino = {
    nome,
    apelido
}