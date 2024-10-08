// src/middlewares/apiCredentials.js

const fs = require('fs/promises');

// como vamos ler arquivos assincronamente, precisamos do async
module.exports = async function apiCredentials(req, res, next) {
  // pega o token do cabeçalho, se houver
  const token = req.header('X-API-TOKEN');
  // lê o conteúdo do `./authdata.json` (relativo à raiz do projeto)
  const authdata = await fs.readFile('/home/arthur/Git/exercicio-trybe/Trybe-exercicios/back-end/secao-03-Introdução-ao-desenvolvimento-Web-com-Node.js/04/soccer-team-manager/src/authdata.json', { encoding: 'utf-8' });
  // readFile nos deu uma string, agora vamos carregar um objeto a partir dela
  const authorized = JSON.parse(authdata);
  if (token in authorized) {
    // modifica o req para guardar a informação importante
    req.teams = authorized[token];
    next();
  } else {
    res.status(401).json({ message: 'Token inválido ou expirado.'});
  }
};

