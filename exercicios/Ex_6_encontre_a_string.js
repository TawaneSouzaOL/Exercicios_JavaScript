// Criar um método para ler propriedades de um objeto e 
// exibir somente as propriedades do tipo string que estão neste objeto

const filme = {
    titulo : 'Barbie e as Três Mosqueteiras',
    ano : 2006,
    diretor : 'Random',
    personagem : 'Coraline'
}

exibirPropriedades(filme);

function exibirPropriedades(obj) {
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            conasole.log(prop, obj[prop])
}