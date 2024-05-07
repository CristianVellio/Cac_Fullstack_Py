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

// crearLibro("Cuentos", "R.Fontanarrosa", 1970, 35);
// crearLibro("Otros cuentos", "Jorge Luis Borges", 1940, 23);
// crearLibro("Mas cuentos", "E. Sachieri", 2006, 67);

const formCarga = document.getElementById("form-cargar");

// DOM - Document Object Model

// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByName();
// document.getElementsByTagName();

function cargarLibro(e) {
  // Cancelamos el evento por default de HTML
  e.preventDefault();

  // leer datos del form
  let campoTit = document.getElementById("titulo").value;
  let campoAut = document.getElementById("autor").value;
  let campoLan = document.getElementById("lanzamiento").value;
  let campoSto = document.getElementById("stock").value;
  // console.log(campoAut, campoLan, campoTit, campoSto);

  // crear objeto
  const nuevoLibro = new Libros(campoTit, campoAut, campoLan, campoSto);

  // push en el array
  libros.push(nuevoLibro);

  // iterar e array
  let contendor = document.querySelector("#libros-oferta");
  // let contenedor2 = document.getElementById("libros-oferta");

  //template string --> tilde invertida o backtick ``
  for (const i of libros) {
    // contendor.innerHTML += "<div>" + i.autor + i.titulo + "</div>";
    contendor.innerHTML += `<div class = 'libro'>
    <h3>${i.titulo}</h3> 
    <p>${i.autor} 
    <br>${i.lanzamiento}
    <br><span class="precio">${i.stock}</span>
    </p>
    </div>`;
  }
  // borramos los campos
  formCarga.reset();
}
function borrarLibros() {
  contendor.innerHTML = "";
}

// ejecutar la funcion de cargarLibro por medio de
//un evento --> JS addEventListener(evento, funcion)

// objeto.metodo("evento", funcion)
formCarga.addEventListener("submit", cargarLibro);

let botonBorrar = document.getElementById("borrar-libros");
botonBorrar.addEventListener("click", borrarLibros);
