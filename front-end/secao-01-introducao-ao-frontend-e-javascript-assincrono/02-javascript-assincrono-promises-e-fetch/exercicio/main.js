// Importamos o Swal da biblioteca sweetalert2
import Swal from 'sweetalert2';

// Criamos as constantes da nossa imagem, do nome e do botão
const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

// Essa é a URL base da API.
const BASE_URL = `https://akabab.github.io/superhero-api/api`;


const MAX_HEROES = 1000;

// Função simples para retornar um valor inteiro aleatório
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

// Adicionamos o eventListener 'click' no nosso botão
button.addEventListener('click', (event) => {
  // event.preventDefault() para evitar que ele recarregue
  // a página
  event.preventDefault();

  const id = randomId();

  fetch()

});