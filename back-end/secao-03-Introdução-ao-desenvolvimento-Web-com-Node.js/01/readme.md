# Conteudo do Dia

Utilizar os comandos do npm para criar e gerenciar pacotes e dependências;

Utilizar o comando node para executar scripts;

Utilizar o sistema de módulos do Node.js;

Criar scripts simples, com interação do usuário, com Node.js;

Utilizar Funções Assíncronas no Node;

Utilizar funções de leitura e escrita de arquivos.

## Sistema de módulos

Um módulo em Node.js é um “pedaço de código”, o qual pode ser organizado em um ou mais arquivos, que possui escopo próprio. Ou seja, suas variáveis, funções, classes e afins só estão disponíveis nos arquivos que fazem parte daquele módulo.

Em outras palavras, um módulo é uma funcionalidade, ou um conjunto de funcionalidades, que se encontram isoladas do restante do código. O Node.js possui três tipos de módulos: internos, locais e de terceiros.

-- MODULOS INTERNOS
Os módulos internos (ou core modules) são inclusos no Node.js e instalados junto com ele quando baixamos o runtime. Alguns exemplos de core modules são:

fs: fornece uma API para interagir com o sistema de arquivos de forma geral;

url: provê utilitários para ler e manipular URLs;

util: oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras.

os: oferece ferramentas e funcionalidades relacionadas ao sistema operacional.

-- Modulos locais
Os módulos locais são aqueles definidos juntamente à nossa aplicação. Eles representam as funcionalidades ou partes do nosso programa que foram separados em arquivos diferentes. Podem ser publicados no NPM, para que outras pessoas possam baixá-los e utilizá-los, o que nos leva ao nosso próximo e último tipo de módulo.

-- Modulos de terceiros
Os módulos de terceiros são aqueles criados por outras pessoas desenvolvedoras e disponibilizados para uso por meio do npm.

@ Exportando Modulos
Para exportar é preciso utilizar o module exports exportanto a constante, e se for exportar multiplos, precisa exportar como se fosse um objeto.
<!-- module.exports = { CtoF, FtoC }; -->

@ Importando modulos
Para importar precisa usar o require(';/meuModulo')
Por exemplo: require('./meuModulo'). Note que a extensão (.js) não é necessária. Por padrão, o Node já procura por arquivos terminados em .js ou .json e os considera como módulos.

Para importar pode dar o nome para constante a ser importada, se for importado um objeto, recebera um objeto.

## Glossário

Módulos
Módulos são como “caixinhas” que isolam suas funções, variáveis e afins de outras partes do código. O Node.js possui três tipos de módulos:

Módulos internos: também chamados de core modules, são módulos que já vem com o Node.js quando baixamos o runtime.
Módulos locais: são aqueles criados por nós na nossa máquina. Eles representam as funcionalidades ou partes do nosso programa que foram separados em arquivos diferentes.
Módulos externos: são módulos publicados no NPM, que as pessoas podem baixar e utilizar em suas aplicações.
Node.js
O Node.js é um interpretador de JavaScript construído a partir do V8 (interpretador utilizado pelo Google Chrome) e que permite a execução de códigos JavaScript fora de navegadores web. De forma resumida, ele nos permite utilizar o JavaScript no backend da aplicação.

NPM
O NPM é o site em que são publicados os pacotes Node.js. Dados do site ModuleCounts.com mostram que atualmente o NPM está entre os repositórios com maior número de pacotes.

npm
npm é a ferramenta de linha de comando(CLI) que realiza o gerenciamento dos pacotes Node.js para nós.

Neste repositório você encontra uma lista para consultas rápidas dos principais comandos npm (Cheat Sheet).

Pacote
Um pacote é um conjunto de arquivos que exportam um ou mais módulos Node.js.

package.json
É onde estão algumas configurações importantes para o nosso pacote como nome, versão, dependências e scripts.

Promises
Promise é um objeto usado para processamento assíncrono. Uma Promise (de “promessa”) representa um valor que pode estar disponível agora, no futuro ou nunca. Se o código é executado sem nenhum problema, ela é resolvida por meio da função resolve; se algo de errado acontecer durante a execução, ela é rejeitada por meio da função reject.

Scripts
São “atalhos” que podemos definir para executar determinadas tarefas relacionadas ao pacote atual. Eles são criados no arquivo package.json, mais especificamente no objeto scripts. Lá, definimos o par de chave e valor correspondentes ao nome que usaremos para chamar o script e o que será executado ao chamá-lo, respectivamente.
