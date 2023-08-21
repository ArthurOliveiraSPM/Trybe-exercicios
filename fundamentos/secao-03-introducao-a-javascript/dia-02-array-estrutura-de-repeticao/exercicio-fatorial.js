let fatorial = 1;

// começa por 10 e vai descendo e multiplicando o resultado, no primeiro vai ser 1*10=o novo resultado de fatorial, dai dps fatorial*index no caso 10*9 e assim por diante
for (let index = 10; index > 0; index=+1) {
  fatorial *= index;
}
console.log(fatorial);
