class Boliche {
  constructor() {
    this.bolos = 10;
    this.strike = false;
    this.spare = false;
    this.turnos = 10;
    this.total = 0;
    this.marcador = [
      {
        tiro1: 0,
        tiro2: 0,
        resultado: 0,
      },
      {
        tiro1: 0,
        tiro2: 0,
        resultado: 0,
      },
      {
        tiro1: 0,
        tiro2: 0,
        resultado: 0,
      },
      {
        tiro1: 0,
        tiro2: 0,
        resultado: 0,
      },
      {
        tiro1: 0,
        tiro2: 0,
        resultado: 0,
      },
      {
        tiro1: 0,
        tiro2: 0,
        resultado: 0,
      },
      {
        tiro1: 0,
        tiro2: 0,
        resultado: 0,
      },
      {
        tiro1: 0,
        tiro2: 0,
        resultado: 0,
      },
      {
        tiro1: 0,
        tiro2: 0,
        resultado: 0,
      },
      {
        tiro1: 0,
        tiro2: 0,
        tiro3: 0,
        resultado: 0,
      },
    ];
  }

  // Ejecuta los lanzamientos de los 10 turnos de un jugador
  juego() {
    for (let i = 0; i < this.turnos; i++) {
      this.primerTiro(this.marcador[i]);
      // Fue un strike?
      if (this.strike == true) {
        this.strikeRules(i);
        continue;
      }
      this.segundoTiro(this.marcador[i]);
      //guardamos el score
      this.saveScore(i);
    }
    this.printFinalScore();
  }

  //aplicamos las reglas del strike y spare
  aplicarReglas() {
    this.total = 0;
    for (let i = 0; i < this.marcador.length; i++) {
      if (i != 9) {
        // Valida si el turno tuvo un strike o spare
        if (!this.isAStrike(i)) this.isASpare(i);
      } else {
        //strike in last shot
        this.strikeInLastShot(i);
        this.spareInLastShot(i);
      }
      this.total += this.marcador[i].resultado;
    }
  }

  //Lanza el primer tiro de cada turno, se genera un numero aleatorio para su puntaje
  // Detectamos si fue un Strike
  primerTiro(turno) {
    let lanzamiento = Math.floor(Math.random() * 10) + 1;
    turno.tiro1 = lanzamiento;
    this.bolos -= lanzamiento;

    if (lanzamiento == 10) {
      this.strike = true;
      this.bolos = 10;
    }
  }

  //Lanza el segundo tiro de cada turno, se genera un numero aleatorio para su puntaje
  // Detectamos si fue un spare
  segundoTiro(turno) {
    let lanzamiento = Math.floor(Math.random() * this.bolos) + 1;
    turno.tiro2 = lanzamiento;

    if (lanzamiento == this.bolos) this.spare = true;
    this.bolos = 10;
  }

  //Aplicamos las reglas e imprimimos el marcador y el puntaje
  printFinalScore() {
    this.aplicarReglas();
    console.log("------------------------");
    console.table(this.marcador);
    console.log(this.total);
  }

  // Guardamos el puntaje obtenido en el turno
  saveScore(i) {
    this.marcador[i].resultado =
      this.marcador[i].tiro1 + this.marcador[i].tiro2;
    this.total += this.marcador[i].resultado;
  }

  // Guardamos el puntaje del strike como un 10
  strikeRules(i) {
    this.marcador[i].resultado = 10;
    this.total += this.marcador[i].resultado;
    this.strike = false;
  }

  //Aplicamos las reglas de un strike en el ultimo tiro
  //Si hay un strike permite generar un ultimo tiro
  strikeInLastShot(i) {
    if (this.marcador[i].tiro1 == 10) {
      this.marcador[i].tiro3 = Math.floor(Math.random() * 10) + 1;
      let bonus = this.marcador[i].tiro3 + this.marcador[i].tiro1;
      this.marcador[i].resultado = bonus;
    }
  }

  // Reglas del spare en el ultimo turno
  // Si hay un spare se permite hacer un 3 tiro
  spareInLastShot(i) {
    if (this.marcador[i].tiro1 + this.marcador[i].tiro2 == 10) {
      this.marcador[i].tiro3 = Math.floor(Math.random() * 10) + 1;
      let bonus =
        this.marcador[i].tiro3 +
        this.marcador[i].tiro2 +
        this.marcador[i].tiro1;
      this.marcador[i].resultado = bonus;
    }
  }

  // Cuando detectemos un Strike, sumamos los bonos a el turno correspondiente
  isAStrike(i) {
    if (this.marcador[i].tiro1 == 10) {
      let bonus = this.marcador[i + 1].tiro1 + this.marcador[i + 1].tiro2;
      this.marcador[i].resultado += bonus;
      return true;
    } else {
      return false;
    }
  }

  //Si la suma de los 2 tiros es 10 (spare) se le suma el resultado del primer tiro del siguiente turno
  isASpare(i) {
    if (this.marcador[i].tiro1 + this.marcador[i].tiro2 == 10) {
      let bonus = this.marcador[i + 1].tiro1;
      this.marcador[i].resultado += bonus;
    }
  }
}

module.exports = Boliche;
