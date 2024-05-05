let animal1 = "perro";
let animal2 = "leon";
let animal3 = "oso";
let animal4 = "raton";

//array / vector / arreglo / matriz

let animales = ["perro", "leon", "oso", "raton"];
// let animales2 = new Array("perro", "leon", "oso", "raton");

// document.write(animales);
// document.write(animales.length);

// length()
// Push()
// pop()
// unshift()
// shift()

function agregarItem(ar, data) {
  ar.push(data);
  //ar.unshift(data);
}

function eliminarItem(ar) {
  //   ar.pop();
  ar.shift();
  //pop y shift no usan parametros y no hace falta aclarar "data"
}

agregarItem(animales, "elefante");
agregarItem(animales, "cabra");
agregarItem(animales, "cebra");

eliminarItem(animales);

// for (let i = 0; i < animales.length; i++) {
//   document.write(animales[i] + "<br>");
// }

//ES6

const recorrerForEach = animales.forEach((element) => {
  console.log(element);
});

// forIn nos devuelve los indices, forOf nos devuelve los valores
// for (const key in animales) {
//   document.write(key + "<br>");
// }

for (const iterator of animales) {
  document.write(iterator + "<br>");
}
