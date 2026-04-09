let nomeDoHeroi = "Rafael"
let xp = 8000
let nivelDoHeroi = "";
switch (true) {
    case (xp < 1000):
        nivelDoHeroi = "Ferro"
        break;
    case (xp <= 2000):
        nivelDoHeroi = "Bronze"
        break;
    case (xp <= 5000):
        nivelDoHeroi = "Prata"
        break;
    case (xp <= 7000):
        nivelDoHeroi = "Ouro"
        break;
    case (xp <= 8000):
        nivelDoHeroi = "Platina"
        break;
    case (xp <= 9000):
        nivelDoHeroi = "Ascendente"
        break;
    case (xp <= 10000):
        nivelDoHeroi = "imortal"
        break;
    default:
        nivelDoHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi);
