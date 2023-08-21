function giveGreeting() {
    return `Olá, boas-vindas à Trybe!`;
  };
// ----function é uma palavra reservada do JavaScript, onde deixamos explícito que iremos declarar uma função;
// ----giveGreeting é o nome da função. Neste caso utilizamos o nome giveGreeting para deixar nítido que a função irá dar uma saudação;
// ----() dentro dos parênteses é onde definimos os parâmetros da função. Eles são uma espécie de “variáveis” utilizadas para passar informações para dentro da função, caso necessário;
// ----{ } os colchetes delimitam o escopo da função. É o “corpo” que contém o que a ser executado;
// <----return é uma palavra-chave reservada do JavaScript que indica que a função deve retornar um valor quando é chamada. 
// Logo após retornado um valor, a função se encerra. No nosso exemplo, estamos retornando a string “Olá, boas-vindas à Trybe!”.-->

console.log(giveGreeting());

