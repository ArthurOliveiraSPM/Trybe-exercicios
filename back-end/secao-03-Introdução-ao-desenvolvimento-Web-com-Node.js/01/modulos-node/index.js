const path = require('path'); // require serve para importação de módulos
console.log(path.dirname(__filename)); // retorna o diretório do arquivo
console.log(path.resolve('users', 'test', 'index.js')); // completa o caminho com as informações passadas
console.log(path.resolve('/', 'users', 'test', 'index.js')); // Retona a partir da raiz

// Resolve passa um conjunto de argumentos e retorna um caminho
// Dirname passa o caminho e extrai o nome do diretorio

const {CtoF, FtoC} = require('./temp');
console.log(CtoF(32));
console.log(FtoC(89.6));