// Metodo getElementById
let titulo = document.getElementById('titulo');

// Alterando o conteudo HTML
titulo.innerHTML = ' Compre só na marabrás';

 // Configurando o CSS do HTML
 titulo.style.textAlign = 'center';
 titulo.style.backgroundColor= '#CCCCC9';
 titulo.style.borderBottom = 'solid 3px #000';
 titulo.style.margin = '20px';

// Metodo getElementsByClassName

let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Bomday 2';
items[1].style.fontWeight = 'Bold'
items[1].style.backgroundColor = 'yellow'
items[1].style.textAlign= 'right'
// items[1].style.padding= '.5rem'

 //Utilizando o FOR para percorrrer a lista
 for(let i = 0; i < items.length; i++){
     items[i].style.backgroundColor= 'blue'
 }


 // Metodo getElementsByTagName

 let li = document.getElementsByTagName('li');
 console.log(li);
 for(let i = 0; i < li.length; i+=2){
    li[i].style.backgroundColor = 'pink'
 }

// Metodo getElementsByName
let nome = document.getElementsByName('fitem')
console.clear();
console.log(nome);
nome[0].textContent = 'Pose de quebrada';
nome[0].style.backgroundColor = 'red';
nome[1].textContent = 'QUERO CAFÉÉÉÉÉ';
nome[1].style.background = 'green'

// Removedor conteudo
let item2 = document.getElementById('item2');
item2.remove();

//Inserir um valor
let lista = document.getElementById('items')
let item1 = document.getElementById('item1')
lista.insertBefore(item2, item1.nextElementSibling)

//Alterar estilo da lista
let ul = document.getElementById('items')
ul.style.listStyle = 'square'