const Boliche = require('./models/Boliche')

const createMarcador = () =>{
    const juego = new Boliche();
    juego.createScoreboard();
    const marcador = juego.marcador;
    return marcador;
}

const validateStrike = ()=>{
    const juego = new Boliche();
    juego.createScoreboard();
    juego.marcador[0].tiro1 = 10;

    return juego.isAStrike(0);

}

const validateSpare = ()=>{
    const juego = new Boliche();
    juego.createScoreboard();
    juego.marcador[0].tiro1 = 5;
    juego.marcador[0].tiro2 = 5;
    juego.marcador[1].tiro1 = 5;
    juego.saveScore(0);
    juego.isASpare(0);
    return juego.marcador[0].resultado

}

const validateScore = ()=>{
    const juego = new Boliche();
    juego.createScoreboard();
    juego.marcador[0].tiro1 = 6;
    juego.marcador[0].tiro2 = 3;
    juego.saveScore(0)
    return juego.marcador[0].resultado;
}

const validateStrikeInLastShot = ()=>{
    const juego = new Boliche();
    juego.createScoreboard();
    juego.marcador[9].tiro1 = 10;

    return juego.marcador[9].tiro1;

}
module.exports = {createMarcador, validateStrike, validateSpare, validateScore, validateStrikeInLastShot};
