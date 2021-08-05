// For..in
const pessoa = {
    nome: 'Tawane',
    idade: 18
};

for(let chave in pessoa) {
    console.log(chave, pessoa ['nome']);
}

const cores = ['Vermelho', 'Azul', 'Amarelo'];

for (let indice in cores) {
    console.log(indice, cores [indice]);
}

// For..of
for (let cor of cores) {
    console.log(cor);
}