var visitante = "Bem vindo Querido visitante";
//alert("Bem vindo " + visitante);
document.write(visitante.replace("Querido", "Prezado"));
document.write("<br>");

var lista =["maçã", "pera", "laranja"];

lista.push("uva"); //acrescenta item no array

lista.pop(); //remove último item do array

console.log(lista.reverse()); //reverte ordem dos itens do array

console.log(lista);

console.log(lista.toString()); //transforma em string separado por vírgula

console.log(lista.join("+")); //transforma em string, porém, o sinal da separação é escolhido pelo programador

var fruta= {nome:"maçã", cor:"vermelha"} //cria um dicionário com atributos para a variável fruta

var frutas= [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}, {nome:"banana", cor:"amarela"}] //cria uma lista de dicionários

document.write(frutas[2].nome); //mostra como popup a frunta segundo posição e atributo chamado
document.write("<br>");

var idade= prompt("Qual é a sua idade?"); // prompt é um popup com espaço para interação

if (idade >=18){
    document.write("Maior de idade.");
    document.write("<br>");
}else{
    document.write("Menor de idade");
    document.write("<br>");
}

/*Laços de repetição
var count =0;
while (count<=5){
    console.log(count);
    alert(count);
    count++
}
var count;
for(count=0; count <=5; count++){
    alert(count);
}
*/

function soma(n1, n2){
    return n1+n2;
}
document.write("A soma é: " + soma(5,10));
document.write("<br>");

function clicou(){
    document.getElementById("agradecimento").innerHTML= "<b> Obrigado por clicar</b>";
}
function redirecionar(){
    window.open("https://www.google.com.br/"); //abre em outra aba
    //window.location.href="https://www.google.com.br/"; abre na mesma aba
}



function teste(entrada){
    let line = entrada.split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);
}
function separaCpf (cpf){
    let line = cpf.split(".");
console.log(line[2]);
}
