// Para verificar se tem algum erro de tipos no codigo é preciso rodar o comando:

// npx tsc

// ### Tipos primitivos
// String
// number
// boolean

// ### Tipo Array
// tipoprimitivo + []
// ex: string[];

// ### Tipo cusmoizados
type Person = {name: string, lastName: string}
// na hora de chamar a função seria parametro: tipo

// função teste (pessoa: Person) {}

// outro exemplo:
type User = {
  id: number,
  name: string,
  modules: string[],
}

let myUser: User;

// ##### extra
// Geralmente, o retorno de uma função é inferido automaticamente, então, na maioria dos casos, você não precisará definir o tipo do retorno. Mas tem como fazer ->

// Tem como definir o retorno de uma função:
// função que retorna um número
function returnNumber(): number {
  return 1
}

// função que retorna um texto
function returnString(): string {
  return ''
}

// função que não tem nenhum retorno
function noReturn(): void {
  // ...
}

// Também é possivel declarar um objeto:
let person: {name: string, age: number };