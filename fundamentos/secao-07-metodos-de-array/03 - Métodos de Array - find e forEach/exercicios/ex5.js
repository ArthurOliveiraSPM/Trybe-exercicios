// Fonte: <https://restcountries.com/v2/all>

const countries = [
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    },
    {
      name: 'Brazil',
      region: 'Americas',
      currencies: [{ code: 'BRL', name: 'Brazilian Real' }],
      capital: 'Brasília',
      population: 213993437,
      area: 8515767
    },
    {
      name: 'Canada',
      region: 'Americas',
      currencies: [{ code: 'CAD', name: 'Canadian Dollar' }],
      capital: 'Ottawa',
      population: 38008005,
      area: 9976140
    },
    {
      name: 'China',
      region: 'Asia',
      currencies: [{ code: 'CNY', name: 'Chinese Yuan' }],
      capital: 'Beijing',
      population: 1439323776,
      area: 9640011
    },
    {
      name: 'France',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Paris',
      population: 67022000,
      area: 551695
    },
    {
      name: 'India',
      region: 'Asia',
      currencies: [{ code: 'INR', name: 'Indian Rupee' }],
      capital: 'New Delhi',
      population: 1393409038,
      area: 3287263
    },
    {
      name: 'Mexico',
      region: 'Americas',
      currencies: [{ code: 'MXN', name: 'Mexican Peso' }],
      capital: 'Mexico City',
      population: 126190788,
      area: 1964375
    },
    {
      name: 'Russia',
      region: 'Europe/Asia',
      currencies: [{ code: 'RUB', name: 'Russian Ruble' }],
      capital: 'Moscow',
      population: 146599183,
      area: 17098242
    },
    {
      name: 'South Africa',
      region: 'Africa',
      currencies: [{ code: 'ZAR', name: 'South African Rand' }],
      capital: 'Pretoria',
      population: 59308690,
      area: 1221037
    },
    {
      name: 'United States',
      region: 'Americas',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Washington, D.C.',
      population: 331449281,
      area: 9629091
    }
  ];


const buildString = (countries, name, ...properties) => {
    const result = countries.find((country) => country.name === name);
    return `${result.name} - ${properties}`;
  };
  
  countries.forEach((country) => {
    const string = buildString(countries, country.name, country.capital, country.currencies[0].code, country.currencies[0].name);
    console.log(string.split(',').join(' - '));
  });

//A função buildString recebe três argumentos: countries, name e properties (um parâmetro rest que representa as propriedades adicionais a serem incluídas na string final);
// Dentro da função, é utilizado o método find para encontrar o objeto de país cujo nome corresponda ao valor fornecido para name;
// Em seguida, é construída e retornada uma string concatenando o nome do país encontrado (result.name) com as propriedades adicionais (properties). Essa string será usada posteriormente para imprimir informações sobre o país;
// O forEach é usado para percorrer cada objeto de país no array countries;
// Dentro do loop, a função buildString é chamada, passando o array countries, o nome do país atual (country.name), e algumas propriedades específicas do país (como a capital e as informações da moeda);
// A string resultante é então modificada para substituir as vírgulas por hífens usando os métodos split(',') e join(' - ').