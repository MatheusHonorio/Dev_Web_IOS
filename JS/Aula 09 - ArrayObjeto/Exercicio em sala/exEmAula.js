const Alunos = [
  {
    Nome: "Jorge",
    notas: [3, 4, 7, 5, 8],
    endereço: "Casa Verde",
    // media: [6.5],
  },
  {
    Nome: "Josivaldo",
    notas: [9, 4, 8, 7, 10],
    endereço: "Pery Alto",
    // media: [9.5],
  },
  {
    Nome: "Cleusa",
    notas: [6, 9, 8, 5, 7],
    endereço: "Imirim",
    // media: [8.75],
    
  },
  
];
let mediaSoma1 = (3 + 4 + 7 + 5 + 8 ) / 4
let mediaSoma2 = (9 + 4 + 8 + 7 + 10 ) / 4
let mediaSoma3 = (6 + 9 + 8 + 5 + 7 ) / 4

let somafinal = mediaSoma1 >= 7 ==true
let somafinal1 = mediaSoma2 >= 7 ==true
let somafinal2 = mediaSoma3 >= 7 ==true


//
console.log(` O aluno(a) ${Alunos[0].Nome} que reside Na ${Alunos[0].endereço} teve as seguintes notas; "${Alunos[0].notas}". Ao todo, ficou com a média de "${mediaSoma1}". Com isso está reprovado(a). ${somafinal} `)
// 
console.log(` O aluno(a) ${Alunos[1].Nome} que reside Na ${Alunos[1].endereço} teve as seguintes notas; "${Alunos[1].notas}". Ao todo, ficou com a média de "${mediaSoma2}". Com isso está Aprovado(a). ${somafinal1} `)
//
console.log(` O aluno(a) ${Alunos[2].Nome} que reside Na ${Alunos[2].endereço} teve as seguintes notas; "${Alunos[2].notas}". Ao todo, ficou com a média de "${mediaSoma3}". Com isso está Aprovado(a). ${somafinal2} `)
