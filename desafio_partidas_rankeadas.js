function calcularNivel(vitorias, derrotas) {
    let saldoDeVitorias = vitorias - derrotas;
    let nivelDoHeroi = "";

    switch (true) {
    case (vitorias <= 10):
        nivelDoHeroi = "Ferro"
        break;
    case (vitorias <= 20):
        nivelDoHeroi = "Bronze"
        break;
    case (vitorias <= 50):
        nivelDoHeroi = "Prata"
        break;
    case (vitorias <= 80):
        nivelDoHeroi = "Ouro"
        break;
    case (vitorias <= 90):
        nivelDoHeroi = "Diamante"
        break;
    case (vitorias <= 100):
        nivelDoHeroi = "Lendário"
        break;
    
    default:
        nivelDoHeroi = "Imortal"
    }
    return { saldoDeVitorias, nivelDoHeroi };
}

let resultado = calcularNivel(75, 10);
console.log(`O Herói tem de saldo de **${resultado.saldoDeVitorias}** está no nível de **${resultado.nivelDoHeroi}**`);