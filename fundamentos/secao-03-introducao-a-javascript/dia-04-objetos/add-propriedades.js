const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };
  
  // Criação da função
  const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined"){
      object[key] = value;
    }
  };
  
  // Chamada da função passando os valores dos parâmetros
  addProperty(customer, 'birthPlace', '19/07/1932');
  
  // Exibe o objeto transformado
//   console.log(customer);

addProperty(customer, 'email', 'roberto.varella@gmail.com');
addProperty(customer, 'fone', '99999-9999');
addProperty(customer, 'userGithub', 'rob-var');
addProperty(customer, 'linkedIn', 'https://linkedin.com/robs-varella-wow');

console.log(customer);