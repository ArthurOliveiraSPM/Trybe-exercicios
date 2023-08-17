// Operador &
let currentHour = 23;
let message;

if (currentHour>= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir'
}else if (currentHour >=18 && currentHour<22) {
    message = 'Rango da noite, vamos jantar :D'
}else if (currentHour>=14 && currentHour<18) {
    message = 'Vamos fazer um bolo pro café da tarde?'
}else if (currentHour>=11 && currentHour<14) {
    message = 'Hora do almoço!!!'
}else if (currentHour>=4 && currentHour<11) {
    message = 'Hmmm, cheiro de café recém-passado'
}
console.log(message);

// Operador OR
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Ou vou para sp ou para goias.
const goToSP = true;
const goToGO = true;

if ((goToSP === true && goToGO === false) || (goToSP === false && goToGO === true)) {
  console.log('Eu fui para apenas um dos lugares.');
} else {
  console.log('Eu fui para os dois, ou para nenhum.');
}

///OPERADOR NOT
// String
let charmander = "Melhor Pokémon inicial.";

console.log(!charmander); // false

//Numeros
console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no JavaScript. Logo, seu oposto é true.

//Valores nulos
console.log(!null); // true

//-Valores indefinidos
console.log(!undefined); // true
