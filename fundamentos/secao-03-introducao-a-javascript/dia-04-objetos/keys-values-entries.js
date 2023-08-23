// Object.keys() retorna um array onde os elementos são os nomes das propriedades (chaves 🔑) em forma de strings. A ordenação destes elementos é a mesma do objeto original.
const product = {
    name: 'Ruffles Original - 76g',
    price: 8.59,
    company: 'Elma Chips',
    nutritionInfo: {
      carbohydrates: 12,
      sugar: 0,
      sodium: 129,
    }
  };
  
  console.log(Object.keys(product));

  // Object.values( ) mesma logica, mas trás os valoes de dentro das propriedades
  console.log(Object.values(product));

//   Object.entries( ) nas outras duas vinha um array de strings, nesse ele retorna um array de arrays, no qual cada array vai ter a chave e o valor
console.log(Object.entries(product));

console.log(Object.entries(product)[0][0]);

