/* A linguagem JavaScript possui seis tipos de dados sendo eles divididos em primitivos e objeto
Todos os tipos, com a exceção de objetos, definem valores imutáveis.*/

// Valores Primitivos
/*
--Boolean
Boolean representa uma entidade lógica e pode ter dois valores: verdadeiro(true) ou falso(false).

--Null
O tipo Null tem exatamente um valor: null(nulo).

--Undefined
Uma variável que não foi atribuída a um valor específico, assume o valor undefined(indefinido). Veja undefined e Undefined para mais detalhes.

--Number
Tipo específico para números.

--String
Conjuntos de letras.*/

let nome = 'Tawane';
let idade = 15;
let estaAprovado = true;
let sobrenome = undefined;
let corSelecionada = null;

// Não-primitvo
/*--Objeto
Na ciência da computação, um objeto é um valor na memória que pode ser possivelmente referenciado por um identifier.*/
let pessoa = { //keyvalue
    nome: "Tawane",
    sobrenome: "de Souza",
    idade: 18,
    profissao: "Desenvolvedora Front-End"
};

console.log(pessoa);

// Nota: use o operador "Typeof" para visualizar o tipo o tipo de dado
// Veja mais: https://ricardo-reis.medium.com/tipos-de-dados-javascript-a1f6f498a7d4, https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures