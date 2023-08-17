let age = 20; //number
let fullName = 'Neko'; //string
let isValid = true; //boolean
let xablau; // undefined
let value = null; // null

console.log(age);
console.log(fullName);
console.log(isValid);
console.log(xablau);
console.log(value);

// exemplo de Var, let e const
var userEmail = 'maria@email.com';

let userId = 78945;

const userLocation = 'Brasil';

//Exemplo se utilização, troque as variaveis para obter diferentes resultados. Da para perceber
//que com o Var você tem acesso fora do bloco if, já com as outras 2 não.

if (true) {//boolean true
    // Início do escopo do if
    var userAge = '20'; //Seta o valor de userAge
    console.log(userAge); // chama o valor para o Log
    // Fim do escopo do if
  }
  
  console.log(userAge); // 20 


  //teste para Var
var userName = 'Isabella';
console.log(userName); // Isabella

var userName = 'Lucas';
console.log(userName); // Lucas


//Teste para const

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';

console.log(favoriteLanguage); 
// TypeError: Assignment to constant variable.

//Teste para let
let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';

console.log(favoriteTechnology); 
// Facial recognition


let patientId = '50';
let isEnrolled = true;
let patientEmail = 'ana@email.com';
console.log(typeof patientId); // number

console.log(typeof patientAge);


let myName = 'Arthur';
let birthCity = 'Paranavai';
let birthYear = 2000;
console.log(myName,birthCity,birthYear);