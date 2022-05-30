//Adição de Botão
const btn = document.querySelector(".btn");
btn.style.background = "red";

//Adição da Idade
const data = new Date();   
const dia = data.getDate();   
const mes = data.getMonth();  
const ano4 = data.getFullYear();   
const str_data = dia + '/' + (mes + 1) + '/' + ano4;   

// Adicionando elementos
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const idadeInput = document.querySelector("#idadeA");
const maiorOuMenor = document.querySelector("#maiorOuMenor");
const msg_email = document.querySelector(".msg_email");
const userList = document.querySelector("#users");
const msg = document.querySelector(".msg");
const msg_idade = document.querySelector(".msg_idade")

// Adicionando ação do botão
myForm.addEventListener("submit", onSubmit);

// Ação
function onSubmit(e) {
  e.preventDefault();
  if (
    nameInput.value === "" || emailInput.value === "" || idadeInput.value === "") {
    // alert('Por favor, preencha os dados.');
    msg.classList.add("error");
    msg.innerHTML = "Por favor, preencha os dados.";
    setTimeout(() => msg.remove(), 3000);
  } else {
    // console.log('sucess');
    const li = document.createElement("li");
    li.appendChild(
    document.createTextNode(
        `Seu nome; "${nameInput.value}".  Seu Email; "${emailInput.value}". Sua idade; "${idadeInput.value}". É maior de idade? "${maiorOuMenor.value}"`
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

  // Validando idade
  function onAdd(e) {
    e.preventDefault();
    if (!confirmandoIdade()) { 
        return
  }
};

function confirmandoIdade() {
  let age = new Date(idadeInput.value)
  let idade = data.getFullYear() - age.getFullYear();
  if (data.getMonth() < age.getMonth()) idade--;
  else if (data.getMonth() == age.getMonth() && data.getDate() < age.getDate() + 1) idade--;

  // Validando a idade
  if (idade < 18) {
      alert('Você é menor de idade.\nEsse site é só para maiores de 18 anos');
      return false;
  }
  return true;
}
