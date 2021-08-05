/*2 - Escreva uma função que usa dois números e retorna o maior entre eles.*/

// Forma 1: Operador ternário
let valorMaior = max (10, 11);
console.log(valorMaior);

function max (a, b) {
    return a > b ? a : b;
}
// 'a' é maior que 'b'? se sim, retorne 'a', se não retorne 'b'.


// Forma 2: If e Else 
function numMaior (x, y) {
    if (x > y) {
        return x
    } else {
        return y
    }
};

let res = numMaior (5, 6);
console.log("O valor maior é", res);



// Forma três: If
let valMaior = maior (26, 10);
console.log(valMaior);

function maior (m, n) {
    if (m > n)
    return m;
    return n;
};