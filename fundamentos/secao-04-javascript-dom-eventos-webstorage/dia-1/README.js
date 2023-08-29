// // 
// O DOM (Document Object Model) é uma interface que representa como arquivos HTML e XML são lidos pelo browser.
//  Após a leitura do documento HTML, o browser cria um objeto que faz uma representação desse documento e define meios de acesso a essa estrutura. 
//  Dessa forma, é possível utilizar o JavaScript para manipular o DOM e, assim, alterar o estilo e o conteúdo de uma página.
// DOM é o que permite a comunicação HTML e o JavaScrpit. Um exemplo de aplicação do DOM é a alteração da cor do fundo de uma página após o clique em um botão

// window: Representa uma janela que contém um elemento DOM. É possível acessar o documento por meio de window.

// location: Representa a localização do objeto ao qual ele está associado, isto é, o documento atual.

// document: Representa qualquer página web carregada no navegador e serve como um ponto de entrada para o conteúdo na página web. Assim, o document contém todos os documentos HTML. Ao acessar qualquer elemento, atributo ou nó do texto, é possível navegar por ele via nó document. Ele é o ponto de partida de todas as visitas à árvore DOM.

// history: Permite a manipulação do histórico da sessão do navegador, ou seja, as páginas visitadas na guia ou no quadro em que a página atual está carregada.

// element: É a classe-base mais geral da qual todos os objetos em um document herdam, isto é, são todas as tags que estão em arquivos HTML e se transformam em elementos da árvore DOM. Elementos HTML descrevem a estrutura de uma página HTML.

// text: É o texto que aparece entre os elementos, ou seja, todo o conteúdo das tags. Depois de ter acessado um nó de elemento, é possível buscar o texto dentro desse elemento. Isso é armazenado em nó de texto próprio.

// atribute: São todos os atributos que um nó específico possui, como class ou id.

////////////////////////Get
// getElementById('id'): Retorna um elemento individual dado o valor de seu atributo id. Se no arquivo HTML não existir nenhum elemento com o id especificado o método retornará null.

// getElementsByClassName('classe'): Tipo um array, Retorna um ou mais elementos dado o valor de seu atributo class. Se no arquivo HTML não existir nenhum elemento com a classe especificada o método retornará uma lista vazia.

// getElementsByTagName('tag'): Retorna todos os elementos na página com o nome de tag especificado. Se no arquivo HTML não existir nenhum elemento com atag especificada o método retornará uma lista vazia.

// querySelector('seletor css'): Usa a sintaxe do seletor CSS, esse método retorna o primeiro elemento que corresponde ao seletor especificado ou null se não houver correspondência.

// querySelectorAll('seletor css'): Também usa sintaxe do seletor CSS. Retorna uma lista de todos os elementos correspondentes ao seletor especificado. Se no arquivo HTML não existir nenhum elemento com os seletores especificados o método retornará uma lista vazia


///////////////////////////////////////////////////
//Enquanto os seletores getElementsByClassName('class-name') e getElementsByTagName('tagName') retornam uma HTMLCollection, os querySelectorAll('.class-name') e o querySelectorAll('tagName') retornam uma NodeList.

// Tanto HTMLCollection quanto NodeList são coleções que armazenam elementos html. A diferença entre eles é que, enquanto um HTMLCollection contém apenas elementos de nó HTML, o NodeList pode conter qualquer tipo de nó. 

