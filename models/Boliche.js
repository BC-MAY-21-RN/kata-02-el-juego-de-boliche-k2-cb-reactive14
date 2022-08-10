class Boliche {
  constructor() {
    this.bolos = 10;
    this.turnos = 10;
    this.strike = false;
    this.spare = false;
    this.bonus;
    this.total = 0;
    this.marcador = [
      //Turno 1
      //[1er tiro, 2do tiro, Puntaje]
      //Turno 2
      //[1er tiro, 2do tiro, Puntaje]
    ];
    this.lanzamiento = [];
  }
  primerTiro(result) {
    if (this.strike) {
      this.rulesStrike(result);
    }

    if (result == 10) {
      this.lanzamiento = [10, 0, 10];
      this.marcador.push(this.lanzamiento);
      this.lanzamiento=[];
      this.strike = true;
    }

    this.bolos -= result;

    this.lanzamiento.push(result);
    if (this.spare) this.rulesSpare(result);
  }
  segundoTiro(result) {
    result == this.bolos ? (this.spare = true) : (this.spare = false);
    this.lanzamiento.push(result);
    //Sumar puntaje Turno
    let puntaje = this.lanzamiento[0] + this.lanzamiento[1];
    this.lanzamiento.push(puntaje);
    this.total += puntaje;
    if (this.strike) this.rulesStrike(puntaje);
    this.marcador.push(this.lanzamiento);
    //this.actualizarMarcador();
    this.lanzamiento = [];
    this.bolos = 10;
  }

  rulesSpare(extra) {
    let turnoActual = this.marcador.length;
    this.marcador[turnoActual - 2] += extra;
    this.total += extra;
  }

  rulesStrike(extra) {
    let turnoActual = this.marcador.length;
    this.marcador[turnoActual - 2] += extra;
    this.total += extra;
    this.strike = false;
  }

  actualizarMarcador() {
    this.marcador.forEach((turno) => {
      //console.log();
    });
  }

  printScore() {
    console.log("Turno 1: ", this.marcador[0][2]);
    console.log("Turno 2: ", this.marcador[1][2]);
    console.log(this.marcador)
    console.log("Total: ", this.total);
  }
  juego() {
    //Turno 1
    //   this.primerTiro(6);
    //   this.segundoTiro(4);
    //Turno 2
    //   this.primerTiro(1);
    //   this.segundoTiro(4);
    //Turno 3
    this.primerTiro(10);

    //Turno 4
    this.primerTiro(3);
    this.segundoTiro(5);
    //this.primerTiro(5);

    //Imprimir
    this.printScore();
  }
}

module.exports = Boliche;
