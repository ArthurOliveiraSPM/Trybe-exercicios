// function sum(num1, num2) {
//   return num1 + num2;
// };
// //Aqui está sendo atribuido o valor da variavel em uma função
// const result = sum(10, 8);

// console.log(result); // 18

let balance = 50;

function soma(valorSoma){
  return balance+valorSoma;
}
function subtrai(valorSub){
  return balance - valorSub
}
function taxa(valorTaxa){
  return balance * valorTaxa
}
function divide(valorDividido){
  return balance / valorDividido
}

console.log(soma(50));
console.log(subtrai(13));
console.log(taxa(3));
console.log(divide(2));

const trybeBankCustomers = ['Neko','Boneco','Caneko'];

function clientes(customer) {
  return `Os clientes ${customer} estão logados`;
}

console.log(clientes(trybeBankCustomers));

function clienteLogado(login){
  for (let index = 0; index < login.length; index+=1) {
    console.log(`Olá ${login[index]}, seja bem-vindo`);
  }
}
console.log(clienteLogado(trybeBankCustomers));

