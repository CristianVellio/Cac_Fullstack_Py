// objetos

// let objeto = {propiedad: "valor", propiedad2: "valor2"};

function saludar1() {
  alert("Hola");
}

let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  dni: 12345678,
  saludar: function () {
    alert("Hola");
  },
};

// DOM Document Object Model

let caja = document.querySelector("#persona");
caja.innerHTML =
  "Hola mi nombre es " +
  persona.nombre +
  " " +
  persona.apellido +
  " y tengo " +
  persona.edad +
  " años";
