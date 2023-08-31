// Arquivo script.js

// Cria um novo elemento <li> e o armazena na variável newElement
let newElement = document.createElement('li');

// Acessa o novo elemento armazenado em newElement e altera seu conteúdo
newElement.innerHTML = 'Um texto para o novo elemento';

// Recupera o elemento que será o pai de newElement e o armazena na variável parent
let parent = document.getElementById('parent');

// Insere o novo elemento como filho de parent
parent.appendChild(newElement);


// Criando dois novos elementos
let newElement2 = document.createElement('div');
let newElement3 = document.createElement('div');

newElement2.innerText = 'Um texto sem marcação HTML';
newElement3.innerHTML = '<b>Um texto com marcação HTML</b>';

parent.appendChild(newElement2);
parent.appendChild(newElement3);

let elementoPrimeiro = document.createElement('li');
elementoPrimeiro.innerHTML = 'Teste para criação de nó';
let paiDoPrimeiro = document.getElementById('pai');
paiDoPrimeiro.appendChild(elementoPrimeiro);

let filhoVoceEsta = document.createElement('p');
filhoVoceEsta.innerText = 'EU SABO';
let paiQueSabe = document.getElementById('elementoOndeVoceEsta');
paiQueSabe.appendChild(filhoVoceEsta);

let netoDoPrimeiro = document.createElement('p');
netoDoPrimeiro.innerText = 'Sou o neto e eu também sabo'
let primeiroDoPrimeiro = document.getElementById('primeiroFilhoDoFilho');
primeiroDoPrimeiro.appendChild(netoDoPrimeiro);

let terceiroFilho = netoDoPrimeiro.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);

let filhoUeCade = document.querySelector('#where-are-you h2')
let paiCade = document.getElementById('where-are-you');
paiCade.removeChild(filhoUeCade);

console.log(document.getElementById('third-child').parentNode.innerText);