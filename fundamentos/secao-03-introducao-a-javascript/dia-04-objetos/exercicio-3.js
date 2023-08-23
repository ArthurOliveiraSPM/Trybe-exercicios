const school = {
  lessons: [
    {
      course: "Python",
      students: 20,
      professor: "Carlos Patrício",
      shift: "Manhã",
    },
    {
      course: "Kotlin",
      students: 10,
      professor: "Gabriel Oliva",
      shift: "Noite",
    },
    {
      course: "JavaScript",
      students: 738,
      professor: "Gustavo Caetano",
      shift: "Tarde",
    },
    {
      course: "MongoDB",
      students: 50,
      shift: "Noite",
    },
  ],
};

const encontrar = (objeto, arrayPosition) =>  Object.values(objeto)[arrayPosition];

// console.log(encontrar(school.lessons, 1));

const totalEstudantes = (obj) => {
    let soma = 0;
    for (let index = 0; index < obj.lessons.length; index+=1) {
        let estudantes = obj.lessons[index].students;
        soma += estudantes;
    } return soma;
}


// console.log(totalEstudantes(school));

const verificaChave = (obj,chave) => {
    for(i = 0; i< obj.lessons.length; i += 1){
        if (obj.lessons[i][chave] === undefined) {
            return false
        }
        
    } return true
}

// console.log(verificaChave(school,'shift'));
const mudarTurno = (base,curso,turnoNovo) =>{
let cursoP;
for (let index = 0; index < base.lessons.length; index++) {
    let array = base.lessons[index];
    if (array.course === curso) {
        cursoP = array;
        break
    }
}   if (cursoP !== undefined) {
        cursoP.shift = turnoNovo;
        return cursoP
}   else{
    return 'Curso nada haver q vc colocou ai'
}

};

console.log(mudarTurno(school,'Python','Noite'));