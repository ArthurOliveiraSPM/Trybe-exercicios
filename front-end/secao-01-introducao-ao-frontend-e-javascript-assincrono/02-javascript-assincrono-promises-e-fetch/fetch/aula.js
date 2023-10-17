fetch("https://api.goprogram.ai/inspiration")
.then((response) =>  response.json()) //o .json() transforma a resposta da API em um objeto de formato JSON. Também existe o .text() que transforma em texto puro
.then((data) => console.log((data)))
.catch((error) => console.log(error));