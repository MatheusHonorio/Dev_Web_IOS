//Adição de Botão
const btn = document.querySelector(".btn");
btn.style.background = "red";

// Adicionando elementos
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const idadeInput = document.querySelector("#idade");
const maiorOuMenor = document.querySelector("#18maiorOuMenor");
const msg_email = document.querySelector(".msg_email");
const userList = document.querySelector("#users");
const msg = document.querySelector(".msg");

// Adicionando ação do botão
myForm.addEventListener("submit", onSubmit);

// Ação
function onSubmit(e) {
  e.preventDefault();
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    idadeInput.value === ""
  ) {
    // alert('Por favor, preencha os dados.');
    msg.classList.add("error");
    msg.innerHTML = "Por favor, preencha os dados.";
    setTimeout(() => msg.remove(), 3000);
  } else {
    // console.log('sucess');
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `Seu nome:${nameInput.value} , Email: ${emailInput.value},  Data de Nascimento : ${idadeInput.value}, Maior ou menor que 18 anos. ${maiorOuMenor}`
      )
    );
    userList.appendChild(li);
    // Limpa o formulário
    nameInput.value = "";
    emailInput.value = "";
    idadeInput.value = "";
    maiorOuMenor.getElementsByTagName("option")[0].selected = "selected";
    nameInput.focus(); //Coloca o foco no elmento
  }
}
// Validando e-mail
emailInput.addEventListener("change", (e) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(emailInput.value)) {
      // alert('Por favor, insira um e-mail válido.');
      msg_email.classList.add("error");
      msg_email.innerHTML = "Por favor, insira um e-mail válido.";
      setTimeout(() => msg.email.remove(), 3000);
    }
  });
