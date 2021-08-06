// Criar uma função que exiba a quantidade de asteriscos desejada em forma de loop

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {    
    for(let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for(let i = 0; i< linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}