/* --Função--
Uma função diz a um computador o que ele deve fazer. As funções podem receber argumentos apara fornecer informações
extras ao computador.*/

let corSite = "azul";
function resetaCor (cor, tonalidade){
    corSite = cor + ' ' + tonalidade
};

console.log(corSite);
resetaCor ("VERDE", "CLARO");
console.log(corSite);