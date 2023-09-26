### Object Destructuring
{ nomeDaChave: minhaVariavel} = meuObjeto;

basicamente, desestrutura o objeto e pega uma variavel especifica, esse exemplo acima ai é a sintaxe cprreta.

### array destructuring
Podemos desestruturar arrays da mesma forma que desestruturamos objetos usando a notação para array destructuring.

### default destructuring
O default destructuring permite especificar valores padrão para variáveis ao extrair valores de objetos ou arrays. Se a propriedade ou elemento que está sendo extraído não estiver presente, o valor padrão é usado em seu lugar. Isso pode ser útil para lidar com casos em que certas propriedades ou elementos são opcionais ou não existem.

### Array.filter()
no array filter tu busca no array o que se encaixa na consição passada.
array.filter((item) => {item = 30});

### Array.sort()
a sintaxe para o array.sort é:
array.sort(`função de comparação` (opcional));

A função de comparação, se fornecida, recebe dois parâmetros, geralmente chamados de a e b, que representam dois elementos a serem comparados. A função deve retornar um valor negativo caso a deva ser classificado antes de b, um valor positivo caso b deva ser classificado antes de a ou zero se a e b são considerados iguais em termos de ordenação.
