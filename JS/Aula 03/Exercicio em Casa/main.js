//criando funcao simples
function alertCookie() {
    alert("Você quer um cookie?");
    console.log("Você quer um cookie?");
    return
};

//Criando arrow function 
const alertSucesso = () => {
    alert("Mensagem gerada com sucesso!");
    console.log("Mensagem gerada com sucesso!");
};

//Criando objeto notebook
const notebook = {
    nome: 'Dell VP',
    modelo: 'VP 5J400P',
    marca: 'Dell',
    cor: 'Branco',
    valor: 5.800
};
//Exibindo o objeto notebook no console
console.log(notebook);

//Função que converte anos em dias

const ConverterAnosEmDias = (anos = 2022, dias = 365) => {
    return anos * dias; 
};
console.log(`2022 anos equivale a `,ConverterAnosEmDias(), `dias.`);

