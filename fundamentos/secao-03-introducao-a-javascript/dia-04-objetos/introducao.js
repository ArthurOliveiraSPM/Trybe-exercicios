const car = {
    brand: 'Fiat',
    model: '500',
    color: 'White',
    weight: 1061,
  };

//   console.log(car.brand);

  const account = {
    agency: '0975',
    bank: {
      cod: '012',
      id: 4,
      name: 'TrybeBank',
    },
  };

//   // Com notação por ponto
// console.log(account.bank); // Resultado do log: { cod: '012', id: 4, name: 'TrybeBank' }

// // Com notação por colchetes
// console.log(account['bank']); // Resultado do log: { cod: '012', id: 4, name: 'TrybeBank' }

// // Para buscar o nome dentro do objeto
// // Com notação por ponto
// console.log(account.bank.name); // Resultado do log: TrybeBank

// // Com notação por colchetes
// console.log(account['bank']['name']); // Resultado do log: TrybeBank

const user = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    info: {
      name: 'Jake',
      lastName: 'Peralta',
      address: {
        street: 'Rua Dalvo Trombeta, 357 - Fundos',
        district: 'Xererê',
        city: 'Santana do Livramento',
        state: 'Rio Grande do Norte',
      },
    },
  };
  
//   console.log(user['id']); // 99
  
//   console.log(user.email); // jakeperalta@gmail.com
  
//   console.log(user.info.address.street); // Rua Dalvo Trombeta, 357 - Fundos
  
//   console.log(user['info']['address']['city']); // Santana do Livramento



//////////////////////////////////OBJETOS DENTRO DE ARRAY

const residents = [
    {
      name: 'Luíza',
      lastName: 'Guimarães',
      floor: 10,
      apartment: 1005,
    },
    {
      name: 'William',
      lastName: 'Albuquerque',
      floor: 5,
      apartment: 502,
    },
    {
      name: 'Murilo',
      lastName: 'Ferraz',
      floor: 8,
      apartment: 804,
    },
    {
      name: 'Zoey',
      lastName: 'Brooks',
      floor: 1,
      apartment: 101,
    },
  ];
//   console.log(residents[0]); // Resultado do log: { name: 'Luíza', lastName: 'Guimarães', floor: 10, apartment: 1005 }

const firstResident = residents[0];
// console.log(firstResident); // Resultado do log: { name: 'Luíza', lastName: 'Guimarães', floor: 10, apartment: 1005 }


console.log(firstResident.floor); // Resultado do log: 10

const lastResident = residents[residents.length - 1];
console.log(lastResident); // Resultado do log: { name: 'Zoey', lastName: 'Brooks', floor: 1, apartment: 101 }

for (let index = 0; index < residents.length; index += 1) {
    const resident = residents[index];
    console.log(resident.name);
  };
