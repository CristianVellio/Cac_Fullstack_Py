//Crear la clase libros

class Libros {
  constructor(tit, aut, lan, sto) {
    (this.titulo = tit),
      (this.autor = aut),
      (this.lanzamiento = lan),
      (this.stock = sto);
  }
}

const libro1 = new Libros("Cuentos", "R.Fontanarrosa", 1970, 35);
