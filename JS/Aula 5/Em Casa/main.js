console.log(`Inicio da Festa`);
let festa = ['Joaquim', 'José', 'Silva','Xavier'];
console.log  (festa)

// Entrada  de novos integrantes 

let  = ['Joaquim', 'José', 'Silva','Xavier'];
let  = festa.unshift('Amanda');
console.log(`Entrada de Amanda`);
console.log  (festa)


// Saida de novos integrantes 

let = ['Amanda','Joaquim', 'José', 'Silva','Xavier', ];
let  = festa.pop();
console.log(`Saida de Xavier`);
console.log (festa)


//Entrada de membro no final

let = ['Amanda','Joaquim', 'José', 'Silva',];
let = festa.push('Zuleica');
console.log(`Entrada de Zuleica no final da lista`);
console.log (festa)


//Saida de inicial

let = ['Amanda','Joaquim', 'José', 'Silva','Zuleica'];
let = festa.shift();
console.log(`Saida de Amanda no inicio da lista`);
console.log (festa)

//Saida Penultimo
let = ['Joaquim', 'José', 'Silva','Zuleica'];
delete festa[2];
console.log(`Saida de Silva no Penultimo lugar`);
console.log (festa)

//Entrada no meio da lista
festa[2] = 'Silvana';
console.log(`Saida de Silvana no meio da lista`);
console.log (festa)
console.log(`Ficaram 4 pessoas na festa, Joaquin, José, Silvana e Zuleica`);