let IOS = [
  {
    nome: "Jorge",
    salario: 1500,
    vinculo: "CLT",
    porcentagem: 7.5 / 100,
  },
  {
    nome: "Josévaldo",
    salario: 1300,
    vinculo: "PJ",
    porcentagem: 7.5 / 100,
  },
  {
    nome: "Lucélia",
    salario: 3900,
    vinculo: "CLT",
    porcentagem: 9 / 100,
  },
  {
    nome: "Rosinaldo",
    salario: 2500,
    vinculo: "PJ",
    porcentagem: 9 / 100,
  },
  {
    nome: "Catolino",
    salario: 11500,
    vinculo: "CLT",
    porcentagem: 14 / 100,
  },
];

console.log();

const valor = 0;

if (IOS[0].salario * IOS[0].porcentagem <= 430) {
    console.log(` O regime de ${IOS[0].nome} é: '${IOS[0].vinculo}', com a contribuição de: ${IOS[0].salario * IOS[0].porcentagem}`);
} else if (IOS[0].salario * IOS[0].porcentagem >= 431) {
    console.log(` O regime de ${IOS[0].nome} é: '${IOS[0].vinculo}', com a contribuição de: ${valor}`);
}

if (IOS[1].salario * IOS[1].porcentagem <= 430) {
  console.log(` O regime de ${IOS[1].nome} é: '${IOS[1].vinculo}', com a contribuição de: ${IOS[1].salario * IOS[1].porcentagem}`);
} else if (IOS[1].salario * IOS[0].porcentagem >= 431) {
  console.log(` O regime de ${IOS[1].nome} é: '${IOS[1].vinculo}', com a contribuição de: ${valor}`);
}

if (IOS[2].salario * IOS[0].porcentagem <= 430) {
  console.log(` O regime de ${IOS[2].nome} é: '${IOS[2].vinculo}', com a contribuição de: ${IOS[2].salario * IOS[2].porcentagem}`);
} else if (IOS[0].salario * IOS[0].porcentagem >= 431) {
  console.log(` O regime de ${IOS[2].nome} é: '${IOS[2].vinculo}', com a contribuição de: ${valor}`);
}

if (IOS[3].salario * IOS[0].porcentagem <= 430) {
  console.log(` O regime de ${IOS[3].nome} é: '${IOS[3].vinculo}', com a contribuição de: ${IOS[3].salario * IOS[3].porcentagem}`);
} else if (IOS[3].salario * IOS[3].porcentagem >= 431) {
  console.log(` O regime de ${IOS[3].nome} é: '${IOS[3].vinculo}', com a contribuição de: ${valor}`);
}

if (IOS[4].salario * IOS[0].porcentagem <= 430) {
  console.log(` O regime de ${IOS[4].nome} é: '${IOS[4].vinculo}', com a contribuição de: ${IOS[4].salario * IOS[4].porcentagem}`);
} else if (IOS[4].salario * IOS[0].porcentagem >= 431) {
  console.log(` O regime de ${IOS[4].nome} é: '${IOS[4].vinculo}', com a contribuição de: ${valor}`);
}


console.log(` lista dos colaboradores da empresa são:`);
console.log(`Nome do Funcionario: ${IOS[0].nome}, tem o salário de: ${IOS[0].salario}`);
console.log(` Nome do Funcionario: ${IOS[1].nome}, tem o salário de: ${IOS[1].salario}`);
console.log(`\ Nome do Funcionario: ${IOS[2].nome}, tem o salário de: ${IOS[2].salario}`);
console.log(` Nome do Funcionario: ${IOS[3].nome}, tem o salário de: ${IOS[3].salario}`);
console.log(` Nome do Funcionario: ${IOS[4].nome}, tem o salário de: ${IOS[4].salario}`);
