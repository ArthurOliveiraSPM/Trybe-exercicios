// const convert = require('./brlValue'); // Importa o módulo brlValue e atribui a constante convert
const { brl, usdToBrl } = require('./brlValue');

const usd = 10;
const brl = convert(usd);

console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7
