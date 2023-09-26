const bankValues = {
    accountNumber: '1756832',
    balance: 5000,
    currency: 'USD',
  };

  // Usando object destructuring
  
  //sem utilizar a notação literal ficaria redundante, repetindo a chave na variável:
//   let {accountNumber: accountNumber, balance: balance, currency: currency} = bankValues;
  
  //mas com a notação literal, podemos omitir o nome das nossas variáveis desejadas:
  let { accountNumber, balance, currency } = bankValues;
  
  //o resultado das duas formas é o mesmo, as variáveis são criadas com os nomes das chaves:
  console.log(accountNumber);   // '1756832'
  console.log(balance);         // 5000
  console.log(currency);        // 'USD'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

  console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matemática',
  };

  const { a: nome, b: classAssigned, c: subject } = student;

  console.log(nome);          // Maria
  console.log(classAssigned); // Turma B
  console.log(subject);       // Matemática

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  