const countParams = (...args) => {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  };
  
  console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(countParams('string', null, [1, 2, 3], {})); // Você passou 4 parâmetros para a função.
  
//   Perceba que a função countParams recebe como parâmetro a informação ...args e 
//   é responsável por contar a quantidade de parâmetros passados para ela.

// Ao executar a função countParams, podemos passar quantos parâmetros quisermos, 
// que a função vai recebê-los e agrupá-los em um array utilizando a sintaxe do rest por meio do parâmetro ...args.

const calcTotal = (...numbers) => {
    let total = 0;
  
    numbers.forEach((number) => {
      total += number;
    });
  
    return total;
  };
  
  console.log(calcTotal(10, 20, 30)); // 60
  console.log(calcTotal(756, 2, 3000, 23)); // 3781