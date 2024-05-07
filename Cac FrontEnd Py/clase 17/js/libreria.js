//Crear la clase libros

class Libros {
  constructor(tit, aut, lan, sto) {
    (this.titulo = tit),
      (this.autor = aut),
      (this.lanzamiento = lan),
      (this.stock = sto);
  }
}

const libros = [];

function crearLibro(tit, aut, lan, sto) {
  const nuevoLibro = new Libros(tit, aut, lan, sto);
  libros.push(nuevoLibro);
}

crearLibro("Cuentos", "R.Fontanarrosa", 1970, 35);
crearLibro("Otros cuentos", "Jorge Luis Borges", 1940, 23);
crearLibro("Mas cuentos", "E. Sachieri", 2006, 67);

// DOM - Document Object Model

document.getElementById();
document.getElementsByClassName();
document.getElementsByName();
document.getElementsByTagName();

function cargarLibro() {
  // prevent default
  // leer datos del form
  // crear objeto
  // push en el array
  // iterar ek array
  //template string
}

let contendor = document.querySelector("#libros-oferta");

for (const i of libros) {
  contendor.innerHTML += "<div>" + i.autor + i.titulo + "</div>";
}
