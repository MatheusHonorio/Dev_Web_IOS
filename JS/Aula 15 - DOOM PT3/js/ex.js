titulo.innerHTML = 'Exercício DOM-parte-3';

let btns = document.querySelector('.bot');
let btn1 = document.querySelector('#bot_01');
let btn2 = document.querySelector('#bot_02');
let btn3 = document.querySelector('#bot_03')
let btn4 = document.querySelector('#bot_04')

for (let i = 0; i < btns.length; i++) {
    btns[i].style.border = '2px solid #D9BC66';
    btns[i].style.padding = '.5rem';
    btns[i].style.margin = '.7rem';
    btns[i].style.backgroundColor = '#D9BC66';

}
disabled.addEventListener('click', display_imagem)

function display_imagem(src) {
    var a = document.createElement("img");
    a.src = './img/alanzoka.jpg';
    document.body.style.backgroundColor = 'gray'
    document.body.style.color = 'white'
    document.body.appendChild(a);
    console.log('mostrar imagem')
        
}



function display_nome() {
    var usuario = prompt('Escreva seu nome');
    var titulo = document.createElement('h2');
    titulo.innerText = 'Seu nome é;';
    var nome = document.createElement('p');
    nome.innerText = `Olá ${usuario}, seja bem-vindo ao nosso site`;
    document.body.appendChild(titulo)
    document.body.appendChild(nome)


}


function display_numero() {


    var numero = prompt('Por favor, coloque um numero');
    numero = parseInt(numero)

    if (isNaN(numero)) {
        alert('Por favor, é necessario que seja numeros')
        return
    }

    var titulo = document.createElement('h2');
    titulo.innerText = 'Tabuada';
    document.body.appendChild(titulo)

    for (let contador = 1; contador <= 10; contador++) {
        var soma = document.createElement('p')
        soma.innerText = `${numero} X ${contador} = ${numero * contador}`
        document.body.appendChild(soma)
    }


}

function display_reset() {

    document.location.reload(true)
}