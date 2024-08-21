const validateID = (req, res, next) => {
    const id = Number(req.params.id); // Converte o id da rota para número
  
    if (Number.isInteger(id) && id > 0) {
      next(); // caso esteja tudo correto, chama o próximo middleware
    } else {
      res.sendStatus(400); // caso o id não seja um número inteiro ou seja menor ou igual a zero, retorna 400
    };
  };

module.exports = validateID;