const name = "Marta";
const lastName = "Silva";
const age = 34;
const medals = { golden: 2, silver: 3 };
const bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

const player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

console.log(
  `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`
);

const contador = (array) => {
    count = 0;

  for (let index = 0; index < array.length; index += 1) {
    count += 1;
  }
  return count;
};
console.log(contador(player.bestInTheWorld));

console.log(
  `A jogadora ${player['name']} ${player['lastName']} tem ${player['age']} anos e foi eleita melhor do mundo ${contador(player['bestInTheWorld'])} vezes`
);

console.log(
    `A jogadora ${player['name']} ${player['lastName']} tem ${player['age']} anos e foi eleita melhor do mundo ${player['bestInTheWorld'].length} vezes`
  );

