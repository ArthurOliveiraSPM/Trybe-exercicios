const data = ['Andre', 998812789, 'Gabriel', 995794897, 'Carol', 955589216];

const result = data.filter((item) => typeof item === 'string');

console.log(result); // ['Andre', 'Gabriel', 'Carol']


// Array de produtos no mercado
const products = [
    { name: 'Maçã', category: 'Frutas', price: 2.5 },
    { name: 'Leite', category: 'Laticínios', price: 3.0 },
    { name: 'Pão', category: 'Padaria', price: 1.5 },
    { name: 'Cenoura', category: 'Legumes', price: 1.0 },
    { name: 'Queijo', category: 'Laticínios', price: 5.0 },
    { name: 'Banana', category: 'Frutas', price: 2.0 },
  ];

  // Filtrar apenas os produtos da categoria "Frutas"
const fruits = products.filter((product) => product.category === 'Frutas');

console.log(fruits);