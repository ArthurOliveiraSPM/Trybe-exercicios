///Copiar array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]


//// Concatenar array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]



//// Passar argumentos para funções
const sumNumbers = (num1, num2, num3) => num1 + num2 + num3;

const numbers = [1, 2, 3];
const result = sumNumbers(...numbers);

console.log(result); // 6

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];

console.log(months);