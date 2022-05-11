let alunos = {
    aluno1: {
      Nome: "Jorge",
      notas: [2, 4, 7, 5, 9],
      endereço: "Casa Verde",
      estado: "SP",
    },
    aluno2: {
        Nome: "Josivaldo",
        notas: [9, 4, 8, 7, 10],
        endereço: "Pery Alto",
        estado: "SP",
    },
    aluno3: {
        Nome: "Cleusa",
        notas: [8, 9, 8, 5, 7],
        endereço: "Imirim",
        estado: "SP",
    },
  }
 //Aluno Jorge
  console.log(` Na Escola Romulo Pero, o ${alunos.aluno1.Nome}  que reside em ${alunos.aluno1.endereço} no estado de ${alunos.aluno1.estado}. Teve às notas ${alunos.aluno1.notas}, saiu com a média de "6,7" por tanto está Reprovado`);
//Aluno Josivaldo
  console.log(` Na Escola Romulo Pero, o ${alunos.aluno2.Nome}  que reside em ${alunos.aluno2.endereço} no estado de ${alunos.aluno2.estado}. Teve às notas ${alunos.aluno2.notas}, saiu com a média de "9,5" por tanto está Aprovado`);
//Aluna Cleusa
  console.log(` Na Escola Romulo Pero, o ${alunos.aluno3.Nome}  que reside em ${alunos.aluno3.endereço} no estado de ${alunos.aluno3.estado}. Teve às notas ${alunos.aluno3.notas}, saiu com a média de "9,25" por tanto está Aprovado`);

