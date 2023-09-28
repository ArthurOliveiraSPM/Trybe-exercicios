const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);

// O array.reduce é chamado com os primeiros dois elementos do array: 1 e 2. O acumulador é inicializado com o valor 1 (se não fornecermos um valor inicial), e o resultado é 3;

// Em seguida, a função é chamada com o resultado anterior (3) e o próximo elemento do array (3). O acumulador agora é 3, e o resultado da função é 6;

// O mesmo processo é repetido para os elementos restantes do array: 4 e 5;

// Quando não há mais elementos no array, o método reduce retorna o valor final do acumulador, que é 15.

const cartoons = [
    {
      title: 'Tom and Jerry',
      episodes: 114,
      popularity: 9
    },
    {
      title: 'Looney Tunes',
      episodes: 175,
      popularity: 8
    },
    {
      title: 'Scooby-Doo',
      episodes: 390,
      popularity: 10
    },
    {
      title: 'The Simpsons',
      episodes: 700,
      popularity: 9
    },
    {
      title: 'Avatar: The Last Airbender',
      episodes: 61,
      popularity: 10
    },
    {
      title: 'Pokémon',
      episodes: 1100,
      popularity: 9
    },
    {
      title: 'Adventure Time',
      episodes: 283,
      popularity: 8
    },
    {
      title: 'Dragon Ball Z',
      episodes: 291,
      popularity: 9
    }
  ];

  const cartoonsReport = cartoons.reduce(() => ({//1 //2
    titles: cartoons.length,//3
    totalEpisodes: cartoons.reduce((acc, cartoon) => acc + cartoon.episodes, 0),//3
    averagePopularity: (cartoons.reduce((acc, cartoon) => (acc + cartoon.popularity), 0)) / cartoons.length,//3
}), {});//4

console.log(cartoonsReport);
//1//
// Declaramos a constante cartoonsReport e atribuímos a ela as chaves titles, totalEpisodes e averagePopularity e o valor respectivo para cada uma delas, tornando-a um objeto.
// Observe que para montar o valor das chaves totalEpisodes e averagePopularity utilizamos o método reduce aplicado ao array cartoons. O reduce será usado para transformar o array em um único valor;

//2//
// Dentro do método reduce, passamos uma função de callback () => {}. Essa função não recebe parâmetros porque não precisa deles nesse caso. Como estamos passando um objeto vazio como valor inicial, o reduce partirá disso;
// A função gera um objeto que representa o relatório que queremos gerar. Ele possui três propriedades:

//3//
// A função gera um objeto que representa o relatório que queremos gerar. Ele possui três propriedades:

// titles: Essa propriedade é definida como o tamanho do array cartoons, que representa o número total de desenhos animados;
// totalEpisodes: Essa propriedade usa outro método reduce aplicado ao array cartoons. Ele percorre cada desenho animado e acumula o número total de episódios, somando o valor de cartoon.episodes ao acumulador acc. O valor inicial do acumulador é 0;
// averagePopularity: Essa propriedade calcula a popularidade média dos desenhos animados. Também utiliza o método reduce para percorrer o array cartoons e acumular a soma das popularidades dos desenhos animados, adicionando o valor de cartoon.popularity ao acumulador acc. Em seguida, divide essa soma pelo número total de desenhos animados (cartoons.length) para obter a média.


//4//
// Por fim, o objeto criado dentro da função de callback é retornado como resultado final do método reduce.

