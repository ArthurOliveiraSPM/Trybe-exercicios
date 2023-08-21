<!-- ###Logica de programação e algoritmos -->
<!-- ##Lógica de Programação -->
A ideia é ser o mais minucioso possivel, aquele exemplo de ir no mercado comprar leite, se tiver ovos pegar 6, e voltar com 6 leites.

<!-- ##Algoritimos -->
Eu resolvi o problema?
Havia outras maneiras de resolver o problema?
A maneira que eu escolhi foi a mais eficiente ou havia uma forma de resolver o problema com menos passos?
Seria possível inverter ou retirar algum passo?
Se eu fosse um computador, conseguiria entender todas as instruções?

A ordem de um roteiro em logicas de programação é:
Leia os dados de entrada; ----> Interprete o problema, faça a analise de requisitos corretamente
Realize o processamento dos dados;
Apresente a saída dos dados.

<!-- ###Templates Literais -->
A sintexe é ao inves de ' utilizar `, isso vai fazer com que vc possa adicionar o javascript dento da string

<!-- ###Array -->
Cada item na lista de um array tem um numero de ID o tal do Index, que sempre começa pelo 0
Exemplo: const shoppingList = ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos'];
seria arroz=0, batata=1 e por ai vai

push()	Adiciona um elemento ao final do array
unshift()	Adiciona um elemento no início do array
pop()	Remove o último elemento do array
shift()	Remove o primeiro elemento do array

<!-- Estrutura de Repetição FOR -->
O laço, lembra?

Inicialização: Todo loop precisa de um início, e é aqui que definimos que lugar é esse. Nessa primeira etapa criamos a variável de controle que guarda o valor inicial do loop. Costumamos nomear essa variável de index;

Condição de parada: Na grande maioria dos casos, você vai querer que esse loop pare! Caso contrário, sua repetição vai executar de forma infinita. E acredite, você não quer que isso aconteça! Nesta etapa é onde definimos qual é a condição que determina se a repetição deve ou não continuar. Essa condição verifica se a variável de controle criada anteriormente ainda atende os critérios definidos;

Atualização: Por fim, essa é a etapa que incrementa (ou decrementa, dependendo da lógica) a variável de controle. Essa atualização é que vai permitir que eventualmente a condição do loop seja falsa, encerrando sua execução. Se essa etapa não for feita, muito provavelmente você terá uma repetição infinita.

A sintaxe é tipo:
for(inicialização;condição;atualização){
    codigo 1
    codigo 2
    ...
}
