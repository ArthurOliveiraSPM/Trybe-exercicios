const age = 87;

if (age >= 18) {
  console.log('Maior de idade');
} else {
  console.log('Menor de idade');
}

// const personAge = 17;
// let canVote;

// if (personAge >= 16) {
//   canVote = 'Pode votar!';
// } else {
//   canVote = 'Não pode votar!';
// }

// console.log(canVote); // Pode votar!


/////// OPERADOR TERNARIO
// a sintaxe do opredor ternario é:
{/* <condição> ? <retorno caso condição seja verdadeira> : <retorno caso condição seja falsa>; */}

const personAge = 17;
const canVote = personAge >= 16 ? 'Pode votar!' : 'Não pode votar!';
console.log(canVote); // Pode votar!

///Novo exemplo
//? funciona como se fosse o if else
//&& se for verdadeiro vai aparecer a primeira, se for a segunda vai retornar falso
let temperature = 20;
let weather = temperature >30 ? 'ta quente' : 'ta de boa';

console.log(`A temperatuda é ${temperature}, portanto, ${weather}.`);

//PARA FIXAR
let grade = 80;
let message;

if (grade>= 80) {
    message = 'Parabéns, você faz parte do grupo de pessoas aprovadas!'
} else if (grade<80 && grade >=60) {
    message = 'Você está na nossa lista de espera.';
}  else {
    message = "Infelizmente, você reprovou.";
}
console.log(message);
