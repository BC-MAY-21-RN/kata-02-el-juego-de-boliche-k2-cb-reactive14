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
    this.lanzamiento = [];
  }
  // primerTiro( marcador[0] )
  primerTiro(turno) {
    let lanzamiento = Math.floor(Math.random() * 10) + 1;
    turno.tiro1 = lanzamiento;
    this.bolos -= lanzamiento;

    if (lanzamiento == 10) {
      this.strike = true;
      this.bolos = 10;
    }
  }

  segundoTiro(turno) {
    let lanzamiento = Math.floor(Math.random() * this.bolos) + 1;
    turno.tiro2 = lanzamiento;

    if (lanzamiento == this.bolos) this.spare = true;
    this.bolos = 10;
  }

  printScore() {
    console.log("Turno 1: ", this.marcador[0][2]);
    console.log("Turno 2: ", this.marcador[1][2]);
    console.log(this.marcador);
    console.log("Total: ", this.total);
  }
  juego() {
    for (let i = 0; i < this.turnos; i++) {
      this.primerTiro(this.marcador[i]);
      // Fue un strike?
      if (this.strike == true) {
        this.marcador[i].resultado = 10;
        // llamar a funcion para actualizar el marcador
        this.total += this.marcador[i].resultado;
        this.strike = false;
        continue;
      }
      this.segundoTiro(this.marcador[i]);

      this.marcador[i].resultado =
        this.marcador[i].tiro1 + this.marcador[i].tiro2;
      this.total += this.marcador[i].resultado;
      // fue un spare?
    }
    console.table(this.marcador);
    console.log(this.total);
    //ACTUALIZAR EL MARCADOR CON LAS REGLAS
    this.aplicarReglas();
    console.log("------------------------");
    console.table(this.marcador);
    console.log(this.total);
  }

  aplicarReglas() {
    this.total = 0;
    for (let i = 0; i < this.marcador.length; i++) {
      if (i != 9) {
        // IS A STRIKE
        if (this.marcador[i].tiro1 == 10) {
          //spareReglas(i)

          let bonus = this.marcador[i + 1].tiro1 + this.marcador[i + 1].tiro2;
          this.marcador[i].resultado += bonus;
        }

        // IS A SPARE
        if (this.marcador[i].tiro1 + this.marcador[i].tiro2 == 10) {
          let bonus = this.marcador[i + 1].tiro1;
          this.marcador[i].resultado += bonus;
        }
      }else{
        //strike in last shot
        if (this.marcador[i].tiro1 == 10) {
          
          this.marcador[i].tiro3 = Math.floor(Math.random() * 10) + 1;
          let bonus = this.marcador[i].tiro3 + this.marcador[i].tiro1
          this.marcador[i].resultado = bonus;

          //spare in last shot
        }else if(this.marcador[i].tiro1 + this.marcador[i].tiro2 == 10){

          this.marcador[i].tiro3 = Math.floor(Math.random() * 10) + 1;
          let bonus = this.marcador[i].tiro3 + this.marcador[i].tiro2 + this.marcador[i].tiro1;
          this.marcador[i].resultado = bonus;
        
        }
      }
      this.total += this.marcador[i].resultado;
    }
  }
}

module.exports = Boliche;
