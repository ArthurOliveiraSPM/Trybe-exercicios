// basicamente, executa uma função "fora de ordem",
//  tipo enquanto o codigo está executando linha por linha, 
// da pra setar uma função e fazer ela rodar em paralelo ao codigo 

console.log("Log 1");

setTimeout(() => console.log("Async log"), 1000);

console.log("Log 2");
console.log("Log 3"); 