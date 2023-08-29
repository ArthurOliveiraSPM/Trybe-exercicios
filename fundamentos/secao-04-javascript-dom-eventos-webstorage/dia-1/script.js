console.log('trybe');
document.getElementById("page-title").innerText = 'Memento';
document.getElementById("first-paragraph").innerText = 'Memento é um filme que conta a história de um homem que esquece tudo o que viveu todo dia, e para não se esquecer de seu objetivo ele tatua todas as suas pricipais informações em seu corpo';
document.getElementById("subtitle").innerText = 'Principais informações';
let primeiroParagrafo = document.getElementsByClassName('paragraph-style');

for (let index = 0; index < primeiroParagrafo.length; index++) {
    primeiroParagrafo[index].style.fontStyle = "italic"; 
}
document.getElementById('second-paragraph').innerText = 'Diretor: Christopher Nolan, Roteiristas: Christopher Nolan e Jonathan Nolan';
document.getElementsByTagName('h2')[0].style.color = 'red';


//////////////////////////////////////////////////////////////////////////

