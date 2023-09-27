/// Em objetos podemos concatenar as variaveis dos objetos
const person = { name: 'John', age: 30 };
const additionalInfo = { occupation: 'Engineer', country: 'FRA' };

const mergedObject = { ...person, ...additionalInfo };

console.log(mergedObject);
// { name: 'John', age: 30, occupation: 'Engineer', country: 'FRA' }