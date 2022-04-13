 
 let inputAdultos = document.getElementById("adultos");
 let inputCriancas = document.getElementById("criancas");
 let inputDuracao = document.getElementById("duracao");

 let resultado = document.getElementById("resultado");

 // Quantidade total de carne, cerveja e outras bebidas para as pessoas

 function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
    let qtdTotalCerveja = cervajaPP(duracao) * adultos;
    let qtdTotalBebida = bebidaPP(duracao) * criancas;

    resultado.innerHTML = `<p>${qtdTotalCarne}g de carne.<p>`;
    resultado.innerHTML += `<p>${qtdTotalCerveja}ml de cerveja.</p>`;
    resultado.innerHTML += `<p>${qtdTotalBebida}ml de bebida(s).</p>`;

 }

 // Quantidade de carne(g) por tempo

 function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

// Quantidade de cerveja(ml) por tempo

function cervajaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

// Quantidade de bebida(ml) por tempo

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}