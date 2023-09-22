const sum = (a, b, callback) => {
    const result = a + b;
    return callback(result);
  };
    
  const showResult = (result) => `O resultado é: ${result}`;
    
  console.log(sum(2, 3, showResult)); // O resultado é: 5

  const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  console.log('O botão foi clicado!');
});


// Neste exemplo, a função passada como segundo parâmetro do addEventListener() será a função callback chamada quando o evento de clique ocorrer.
// O resultado será a exibição da mensagem “O botão foi clicado!” no console quando o botão for clicado.