let libros = [
  {
    titulo: "El Gran Gatsby",
    autor: "F. Scott Fitzgerald",
    anoPublicacion: 1925,
    cantidad: 23,
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anoPublicacion: 1967,
    cantidad: 55,
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacion: 1949,
    cantidad: 12,
  },
];

let caja = document.querySelector("#persona");

// data son los objetos libros son el array
// se coloca el += porque estamos sumando la iteracion al valor anterior
for (const data of libros) {
  //   caja.innerHTML +=
  //     data.titulo +
  //     "<br>" +
  //     data.autor +
  //     "<br>" +
  //     data.anoPublicacion +
  //     "<br>Cantidad de ejemplares: " +
  //     data.cantidad +
  //     "<hr>";

  // template string

  caja.innerHTML += `<div class="libro">${data.titulo} <br> ${data.autor} <br> ${data.anoPublicacion} <br> Cantidad de ejemplares: ${data.cantidad}</div>`;
}
