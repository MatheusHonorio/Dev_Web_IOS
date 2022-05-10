// Trabalhando com STRINGS
// Concatenar
let exemplo1 = 10;
let exemplo2 = 2;
let string1 = "Jorge que vem la da capadócia";

//  parenteses para priorizar algo
console.log("O Resultado da soma é:  " + (exemplo1 + exemplo2));

console.log("O Resultado da Multiplicação é:  " + exemplo1 * exemplo2);

console.log(`O Resultado da Divisão é: ${exemplo1 / exemplo2}  `);
console.clear();

// Metodos de String

//Acessa uma string

let string2 = "Jorge que vem la da capadócia";
console.log(string2.charAt(0));
//String com []
console.log(string2[1]);

// Tamanho da String
let string3 = "Jorge que vem la da capadócia";
console.log(string3.length);

// Maiuscula e Minusculas
let string4 = "jorge que vem la da capadócia";
console.log(string4.toUpperCase());

let string5 = "JORGE QUE VEM LA DA CAPADÓCIA";
console.log(string5.toLowerCase());

// Substring e Slipt

let string6 = "Mozilla";
// Começa a contabilizar na anterior da ultima (end)
console.log(string6.substring(1, 3));
// Slipt
let string7 = "A Tartaruga é um animal rapido";
let string8 = string7.split(" ");
console.log(string8[3]);
// Acessa palavras a partir dos espaços
console.log(string8);

// Substituir uma string dentro da string
let string9 = "A Tartaruga é um animal rapido";
let string10 = string9.replace("rapido", "lento");
console.log(string10);

//Removedor de Espaços em branco da String (final e inicio)
let string11 = "          A Tartaruga é um animal rapido         ";
console.log(string11.trim());

// Métodos de buscar em strings
let string12 = "A Tartaruga é  animal rapido um";
//String.indexOff
console.log(string12.indexOf('um'));
console.log(string12.lastIndexOf('um'));
//Search
console.log(string12.search('é'));
//startsWith
console.log(string12.startsWith('A'));
