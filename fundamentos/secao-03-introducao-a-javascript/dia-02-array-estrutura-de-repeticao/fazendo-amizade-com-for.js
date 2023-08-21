const nomesEstudantes = ["Neko", "Arthur", "Thurzao", "Thur", "Boneko"];

for (let index = 0; index < nomesEstudantes.length; index += 1) {
  console.log(nomesEstudantes[index]);
}

const heroisLegais = [
  "Miranha",
  "Batima",
  "Homem Sereia",
  "Demolidor",
  "Deadpool",
];
const heroisMaisBacanas = [];

for (let index = 0; index < heroisLegais.length; index += 1) {
  if (
    heroisLegais[index] === "Batman" ||
    heroisLegais[index] === "Miranha" ||
    heroisLegais[index] === "Deadpool"
  ) {
    heroisMaisBacanas.push(heroisLegais[index]);
  }
}

console.log(heroisMaisBacanas);