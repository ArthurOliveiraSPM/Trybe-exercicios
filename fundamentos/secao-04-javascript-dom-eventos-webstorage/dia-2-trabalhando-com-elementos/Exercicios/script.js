let agencia = document.createElement('h1');
agencia.innerText = 'TrybeTrip - Agência de Viagens';
agencia.className = 'title';
let bodyPai = document.querySelector('body');
bodyPai.appendChild(agencia);

let mainContent = document.createElement('main');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

let centerContent = document.createElement('section');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

let texto = document.createElement('p');
texto.innerHTML = 'Eu sabo';
centerContent.appendChild(texto);

let leftContent = document.createElement('section');
let rightContent = document.createElement('section');
leftContent.className = 'left-content';
rightContent.className = 'right-content';
mainContent.appendChild(leftContent);
mainContent.appendChild(rightContent);

let smallImage = document.createElement('img');
smallImage.className = 'small-image';
smallImage.src = 'https://picsum.photos/200';
leftContent.appendChild(smallImage);

let lista = document.createElement('ul');
const list = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let index = 0; index < list.length; index += 1) {
    const li = document.createElement('li')
    li.innerText = list[index];
    lista.appendChild(li);        
}
rightContent.appendChild(lista);


for (let index = 0; index < 3; index++) {
    const tag = document.createElement('h3');
    tag.className = 'description';
    mainContent.appendChild(tag)
}

mainContent.removeChild(leftContent);
rightContent.style.marginRight = 'auto';
centerContent.style.background = 'green'
lista.lastChild.remove();
lista.lastChild.remove();