const voters = [
  { name: "Bob", age: 30, voted: true }, // { Bob: true }
  { name: "Jake", age: 32, voted: true }, // { Jake: true }
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 42, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

voters.reduce((acc, currentValue) => {
  let classificaçãoAge = "";
  if (currentValue.age <= 30) {
    classificaçãoAge = "young";
  } else if (currentValue.age > 30 && currentValue.age < 50) {
    classificaçãoAge = "adult";
  } else {
    classificaçãoAge = "old";
  }

  if (acc.hasOwnProperty(classificaçãoAge)) {
    acc[classificaçãoAge] = 1;
  } else {
    acc[classificaçãoAge] += 1;
  }
  return acc;
}, {});
