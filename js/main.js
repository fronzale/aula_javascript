// comenta uma linha
/* Comenta
várias
linhas */

/*var lista = ["maça", "pera", "laranja"];
lista.push("uva");
lista.pop();
var nome = "Lezim";
var idade = 39;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade+idade2);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - "));*/
/*
var fruta = {nome: "maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);*/
/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"verde"}];
console.log(frutas);
alert(frutas[1].nome);*/

/*
var idade = prompt("Qual é a sua idade? ");
//var idade = 18;
if (idade >= 18)
{
    alert("Maior de Idade");
}
else
{
    alert("menor de Idade");
}*/
/*
var count = 0;
while (count <=5)
{
    console.log(count);
    count++;
};*/

/*
var count;
for(count=0; count <= 5; count++)
{
    alert(count);
}*/
//var d = new Date();
//alert (d);
//alert(d.getDate());
//alert(d.getMonth()+1); // Para MÊs sempre somar 1 pois começa do mÊs 0
//alert(d.getMinutes());
//alert(d.getDay());
//alert(d.getHours());

// ############################################################################################
/*function soma(n1, n2) 
{
    return n1+n2;    
}
alert(soma(5,10));
*/
/*
function setReplace(frase, nome, novo_nome)
{
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
// ############################################################################################*/

/*
function validaIdade(idade)
{
    var validar;
    if (idade >= 18)
    {
        validar = true;
    }
    else
    {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual é a sua idade?");
console.log(validaIdade(idade));*/

/*function botao()
{
    alert("Obrigado por clicar!")
}*/

// #####################################################################################
/*function clicou() 
{
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function redirecionar()
{
    window.open("http://www.e-techinformatica.com.br"); // abre em nova aba
    window.location.href = "http://www.e-techinformatica.com.br"; //abre na mesma janela
}*/
// #####################################################################################

function trocar(elemento)
{
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; ///// Utilizar sem o "this" c/ "id"
//    alert("Trocar Texto");
}

function voltar(elemento)
{
    elemento.innerHTML = "Passe o mouse aqui...";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui..."; ///// Utilizar sem o "this" c/ "id"
//    alert("Trocar Texto");
}

function load()
{
    alert("Página Carregada!");
}

function funcaoChange(elemento)
{
    console.log(elemento.value);
}