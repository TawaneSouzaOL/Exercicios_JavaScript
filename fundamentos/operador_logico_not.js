let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('Pode aplicar: ', podeAplicar);

// OPERADOR LÓGICO "NOT"
let candidatoRecusado = !podeAplicar;
console.log('Candidato recusado: ', candidatoRecusado);