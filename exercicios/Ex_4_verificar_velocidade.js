// Velocidade máxima de 70 km/h
// A cada 5 km acima do limite você ganha 1 pontoa na carteira
// Math.Floor()
// POntos maior que 12 = carteira suspendida
verificarVelocidade (85);

function verificarVelocidade (velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('OK!');
    else {
        const pontos = Math.floor (((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira suspensa!');
        else
            console.log('Pontos', pontos);
    } 
}