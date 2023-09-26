array.sort(`função de comparação` (opcional));

const numbers = [5, 2, 10, 1, 8, 23, 4, 3, 1789];

numbers.sort((a, b) => a - b);
//A função de comparação (a, b) => a - b é fornecida para garantir a ordenação numérica correta. 
// Ela subtrai b de a, o que resulta em um valor negativo caso a deva ser classificado antes de b, 
// um valor positivo caso b deva ser classificado antes de a, e zero se a e b são considerados iguais.

console.log(numbers); // [1, 2, 3, 4, 5, 8, 10, 23, 1789]


const products = [
    { name: 'Notebook', price: 2500 },
    { name: 'Celular', price: 1500 },
    { name: 'TV', price: 3000 },
    { name: 'Fones de ouvido', price: 100 },
  ];
  
  products.sort((a, b) => a.price - b.price);
  
  console.log(products);
  // [
  //   { name: 'Fones de ouvido', price: 100 },
  //   { name: 'Celular', price: 1500 },
  //   { name: 'Notebook', price: 2500 },
  //   { name: 'TV', price: 3000 }
  // ]