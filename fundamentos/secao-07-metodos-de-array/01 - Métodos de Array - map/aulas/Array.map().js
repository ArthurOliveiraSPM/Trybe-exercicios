const newArray = array.map((elementoAtual, index, arrayOriginal) => {
    // Operações realizadas em cada elemento do array
    // Retorna o valor transformado
  });

// elementoAtual: O valor atual do elemento sendo processado;
// index (opcional): O índice do elemento atual no array;
// arrayOriginal (opcional): O array original no qual o método map foi chamado.

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => number ** 2);

console.log(squaredNumbers); // [ 1, 4, 9, 16, 25 ]

////seria como fazer isso com o for
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = [];

// for (let index = 0; index < numbers.length; index += 1) {
//     squaredNumbers.push(numbers[index] ** 2);
// };

// console.log(squaredNumbers);

const heroes = ['Homem-Aranha', 'Hulk', 'Batman', 'Homer Simpson'];
const weight = [64, 400, 95.3, 130.23];

const updateHeroes = (heroesArray, weightArray) => heroesArray.map((hero, index) => (
  { [hero]: weightArray[index] }
));

const heroesList = updateHeroes(heroes, weight);
console.log(heroesList);
// [
//   { 'Homem-Aranha': 64 },
//   { Hulk: 400 },
//   { Batman: 95.3 },
//   { 'Homer Simpson': 130.23 }
// ]