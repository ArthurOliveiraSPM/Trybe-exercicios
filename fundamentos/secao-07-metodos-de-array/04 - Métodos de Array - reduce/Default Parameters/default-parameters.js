const greeting = (name, message = "Olá") => console.log(`${message} ${name}, tudo bem?`);

// Chamada da função sem o segundo argumento
greeting(''); // Olá João, tudo bem?

greeting("Maria", "Oi"); // Oi Maria, tudo bem?


const multiply = (valor1, valor2 = 1) => valor1 * valor2;

console.log(multiply(2, 5));