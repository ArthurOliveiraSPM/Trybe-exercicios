const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  let totalFrutas = {};

  const contaFrutas = (array) => {
    for (let index = 0; index < array.length; index += 1) {
        fruta = array[index];

        if (totalFrutas[fruta] === undefined) {
             totalFrutas[fruta] = 1;
        }else{
            totalFrutas[fruta] += 1;
        }
    } 
    let cesta = Object.entries(totalFrutas);
    let resultado = [];
    ////Tentei dessa maneira mas n estava conseguindo adicionar o plural, precisei dar uma olhada no gabarito pra ter uma luz
    // for (let index = 0; index < cesta.length; index++) {
    //     let fruta = cesta[index]
    //     let reverso = fruta.reverse().join(' ');
    //     resultado.push(reverso);
        
    // }   return `Sua cesta possui ${resultado}`
    for (let index = 0; index < cesta.length; index += 1) {
        if (cesta[index][1] > 1) {
            resultado.push(`${cesta[index][1]} ${cesta[index][0]}s`)
        }
        else {
            resultado.push(`${cesta[index][1]} ${cesta[index][0]}`)
        }
        
    }   return `Sua cesta possui: ${resultado.join(', ')}.`
  }


  console.log(contaFrutas(basket));
