# Que perigo

Permite que os metodos de frontend, comuniquem com os metodos backend através de API

os parametros são a url e um objeto de configuração opcional.
fetch(URL, {objeto de configuração(opcional)});

URL (obrigatório): é o endereço da API para qual faremos a requisição;
Objeto de configurações (opcional): caso a requisição precise de alguma configuração adicional, é possível defini-la nesse objeto.

se tratando do encadeamento de condição dos then e catch:
Você pode ter quantos then encadeados forem necessários, mas geralmente costuma-se ter apenas um catch, pois esse catch conseguirá capturar um erro que seja disparado em qualquer um dos then anteriores.

## Existem varias promisses

Promise.all
Promise.race
Promise.any
Promise.allSettled

### Promisse.all

Parâmetro recebido: array de promises

Retorno: o retorno varia de acordo com a situação:

- quando todas promises são resolvidas: retorna uma promise resolvida com um array com o resultado de cada promise recebida.
- quando uma promise é rejeitada: retorna uma promise rejeitada com o objeto o erro retornado pela promise que foi rejeitada.
mesmo que uma das promises seja rejeitada, os códigos das outras ainda serão executados.

<https://content-assets.betrybe.com/prod/be6af146-23b1-4a9a-b2d6-1b595ccd34b4-Anima%C3%A7%C3%A3o%20representando%20Promise.all%20com%20todas%20promises%20resolvidas.gif>

### Promise.race

Parâmetro recebido: array de promises

Retorno: o retorno varia de acordo com a situação:

- quando a primeira promise finalizada for resolvida: retorna uma promise resolvida com o valor retornado pela primeira promise original.

- quando a primeira promise finalizada for rejeitada: retorna uma promise rejeitada com o objeto o erro retornado pela promise original.

mesmo que Promise.race só receba o valor da primeira promise a ser finalizada e ignore o valor das outras promises, todas as promises passadas como parâmetro serão executadas.

<https://content-assets.betrybe.com/prod/be6af146-23b1-4a9a-b2d6-1b595ccd34b4-Anima%C3%A7%C3%A3o%20representando%20Promise.any%20com%20alguma%20promise%20sendo%20resolvida.gif>

### Promise.any

Parâmetro recebido: array de promises

Retorno: o retorno varia de acordo com a situação:

- quando alguma promise finalizada for resolvida: retorna uma promise resolvida com o valor retornado pela primeira promise original, ignorando qualquer outra promise que tenha sido finalizada primeiro como rejeitada.

- quando todas as promise forem rejeitadas: retorna uma promise rejeitada com o objeto contendo todos os erros retornados pelas promises originais.

mesmo que Promise.any só receba o valor da primeira promise a ser realizada e ignore o valor das outras promises, todas as promises passadas como parâmetro serão executadas.

<https://content-assets.betrybe.com/prod/be6af146-23b1-4a9a-b2d6-1b595ccd34b4-Anima%C3%A7%C3%A3o%20representando%20Promise.any%20com%20todas%20promises%20rejeitadas.gif>

### Promise.allSettled

Parâmetro recebido: array de promises

Retorno: retorna uma única promise que é resolvida quando todas as promises passadas forem finalizadas. A promise é retornada com um array de objetos que contém o valor retornado por cada uma das promises originais.

<https://content-assets.betrybe.com/prod/be6af146-23b1-4a9a-b2d6-1b595ccd34b4-Anima%C3%A7%C3%A3o%20representando%20Promise.allSettled%20com%20todas%20promises%20sendo%20finalizadas.gif>

### Tabelinha

Metodo                      |   Parametro Recebido  |    Retorno

Promisse.all                |   array de promises   |   Retorna 1 array dos resultados de acordo as promisses passadas

Promise.race                |   array de promises   |   Retorna o valor da primeira promise que foi finalizada, sendo resolve ou reject

Promise.any                 |   array de promises   |   Basicamente ignora todas as promises com erro, e busca a primeira que deu certo.
                                                            Se todas forem rejeitadas, retorna um objeto contendo todos os erros

Promise.allSettled          |   array de promises   |   Array com o resultado de todas as promisses, sendo aceita ou rejeitada
