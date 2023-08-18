const shoppingList = ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos'];

// Acessando o primeiro elemento do array shoppingList
//console.log(shoppingList[0]); // Saída: Arroz

// Acessando o terceiro elemento do array shoppingList e guardando dentro de uma constante
const item = shoppingList[2];

//console.log(item);  // Saída: Leite Ninho


//Alterar o valor de um elemento
shoppingList[1] = 'Suco de Cajú';

//console.log(shoppingList); // Saída: [ 'Arroz', 'Suco de Cajú', 'Leite Ninho', 'Sucrilhos' ]


// push()
shoppingList.push('Cotonetes');//adiciona no final

// unshift()
shoppingList.unshift('Água de Coco');//adiciona no inicio

// pop()
shoppingList.pop();//Remove o ultimo elemento da lista

// shift()
shoppingList.shift();//remove o primeiro elemento do array

//console.log(shoppingList);

// Também da pra saber o tamanho da lista
//console.log(shoppingList.length); // Saída: 4

//E para pegar o ultimo elemento do Array
console.log(shoppingList[shoppingList.length -1]);




