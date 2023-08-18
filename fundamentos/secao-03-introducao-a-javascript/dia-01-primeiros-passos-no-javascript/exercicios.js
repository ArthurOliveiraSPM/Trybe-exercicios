//-----ex 1
// let num1 =1;
// let num2 =2;

// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1 * num2);
// console.log(num1 /num2);
// console.log(num1 % num2);

//-----ex2
// let num1 =5;
// let num2 =2;
// let message;

// if (num1>num2) {
//     message = 'é maior mesmo'
// }
// console.log(message);

//-----ex3
// let num1=5;
// let num2=4;
// let num3=3;
// let message;
// if (num1>num2 && num1>num3) {
//     message = 'O maior numero é o ' + num1;
// }else if (num2>num1 && num2>num3) {
//     message = 'O maior numero é o ' + num2;
// }else{
//     message = 'O maior numero é o ' + num3;
// }
// console.log(message);

//-----ex4
// let angulo1 = 30;
// let angulo2 = 90;
// let angulo3 = 60;
// let angulosSoma = angulo1 + angulo2 + angulo3;
// let valorValido = angulo1>0 && angulo2>0 && angulo3>0;

// if (valorValido){
//     if (angulosSoma == 180) {
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }else{
//     console.log('O valor é invalido');
// }

//-----ex5
// let peca = 'peão';

// switch (peca.toLowerCase()) {
//   case 'rei':
//     console.log('Rei -> Uma casa para qualquer direção.');
//     break;
//     case 'peão':
//     console.log("Peão -> Avança uma, pode capturar nas diagonais. O primeiro movimento pode ser 2 casas");
//     break;
//     case 'bispo':
//     console.log('Bispo -> Diagonais.');
//     break;
//   case 'dama':
//     console.log('Dama -> Diagonais, horizontais e verticais.(precisa nerfar, muito roubada)');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> é o famoso um dois vira, movimenta em L');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontais e verticais.');
//     break;
//   default:
//     console.log('Erro, peça inválida!');
// };

//-----ex6
// let num1 = 1;
// let num2 = 1;
// let num3 = 1;

// let ePar = false;

// if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
//   ePar = true;
// }
// console.log(ePar);

//-----ex7
let salarioBruto = 3000;
let aliquota;
let impostoRenda;

if (salarioBruto <= 1556.94) {
  aliquota = salarioBruto * 0.08;
} else if ((salarioBruto <= 2594.92)) {
  aliquota = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.92) {
  aliquota = salarioBruto * 0.11;
} else {
  aliquota = 570.88;
}
let salarioBase = salarioBruto - aliquota;

if (salarioBase <= 1903.98) {
  impostoRenda = 0
} else if (salarioBase <= 2826.65) {
  impostoRenda = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  impostoRenda = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  impostoRenda = (salarioBase * 0.225) - 636.13;
} else {
  impostoRenda = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - impostoRenda;

console.log('O seu salário é de R$'+ salarioLiquido);