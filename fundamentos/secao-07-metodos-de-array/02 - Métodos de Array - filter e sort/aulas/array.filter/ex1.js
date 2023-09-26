const people = [
    { name: 'João', age: 25 },
    { name: 'Maria', age: 30 },
    { name: 'Pedro', age: 20 },
    { name: 'Ana', age: 35 },
  ];

  const people30Age = people.filter((people) => people.age >= 30)

  const olderPeople = people.filter(({age}) => age >= 30)


  console.log(people30Age);
  console.log(olderPeople);