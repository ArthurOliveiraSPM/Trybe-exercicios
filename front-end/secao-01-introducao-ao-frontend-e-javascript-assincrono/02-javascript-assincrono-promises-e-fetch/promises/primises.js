// Promise é um objeto usado para processamento assíncrono. 
// Um Promise (de “promessa”) representa um valor que pode estar disponível agora, no futuro ou nunca.

new Promise((resolve, reject) => {});

// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

  const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });
  //Repare que podemos retornar qualquer valor usando a função reject, 
  //mas geralmente é uma boa prática retornar um objeto de erro.

  // o response recebe exatamente o mesmo valor que resolve(da linha 14) recebe
// Then é a condição do caso for resolvida
//  catch é a condição para caso não for resolvida
  resolvedPromise()
  .then((response) => {
    console.log(`resolvedPromise: o número gerado é ${response}.`);
  })
  .catch((error) => {
    console.log(`Com a promise resolvida, não irá passar pelo catch`);
  });

rejectedPromise()
  .then((response) => {
    console.log(`Com a promise rejeitada, não irá passar pelo then`);
  })
  .catch((error) => {
    console.log(`rejectedPromise: ${error.message}`);
  })  
  .finally(() => console.log('Fim da execução da segunda promise.'));

