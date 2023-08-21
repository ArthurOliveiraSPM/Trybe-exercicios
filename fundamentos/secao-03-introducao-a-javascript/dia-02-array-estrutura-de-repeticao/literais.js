const myName = 'Isabella';
const myLastName = ' Tavares';

// O padrão seguido até aqui
console.log('Hello' + ' ' + myName + '!');
// Com template literals, ao inves de 'é utilizado o `
console.log(`Welcome ${myName}!`);
// Também da pra usar $(a+b)
console.log(`Welcome ${myName+myLastName}!`);



//Exemplo de quebra de linha e outras paradinhas legais
const product = 'Iphone 45 plus';
const price = 40000;
const discount = 10;

const message = 
`Produto: ${product}
Preço: ${price}
Disconto: ${discount}%
Preço com desconto à vista: ${(price * (discount/100)).toFixed(2)}
`//esse to fixed adiciona quantas casas depois da virgula
console.log(message);