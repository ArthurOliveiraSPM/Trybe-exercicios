// Array e loop for
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   sum += numbers[index];
// }
// let mediaValor = sum / numbers.length;

// if (mediaValor > 20) {
//   console.log("O valor da média aritmética é maior que 20");
// } else {
//   console.log("O valor da média aritmética é menor ou igual a 20");
// }

// //Ex5
// //pega o um numero do array testa com o segundo, quem for o maior vira a variavel "maiorNumero". Dai testa denovo a maiorNumero vs o index, e o laço repete até acabar o array
// let maiorNumero = numbers[0];
// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] > maiorNumero) {
//     maiorNumero = numbers[index];
//   }
// }
// console.log(maiorNumero);

// ex6
//Aqui primeiro seta a variavel como numero e 0, o laço vai um por um testando se é impar com aquele lançe do resto, se um numero par for divido por 2 nunca vai dar resto
//então usa que o resultado tem que ser diferente de 0, ai achou o que é impar. com o if está dizendo tipo: "Toda vez que testar e for impar, soma mais 1 nessa variavel"
let numeroImpar = 0
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 !== 0) {
    numeroImpar +=1;
  }}; 
//Ai se não encontrou nada, vai continuar como 0 pq n somou nada, e se achou qualquer impar vai dizer a quantidade.  
  if (numeroImpar ===0) {
    console.log('nao tem enhum numero impar');   
  }
  else {
    console.log(numeroImpar);
  }

