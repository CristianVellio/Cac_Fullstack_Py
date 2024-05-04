// variables -> var o let
// constante -> const

// let saludo = "Hola mundo";
// alert(saludo);
// saludo = 23;
// console.log(saludo);

// const PI = 3.1416;

//cuadros de dialogo
//alert, prompt, confirm

// let edad = prompt("Cual es tu edad?");
// console.log(edad);

// document.write("La edad del usuario es: " + edad);

// prompt devuelve strings
// parseInt() parseFloat() -> "Parsear un dato" lo convierte a valor numerico
// let num1 = parseFloat(prompt("Ingresa el primer numero"));
// let num2 = parseFloat(prompt("Ingresa el segundo numero"));

// Operadores aritmeticos -> + - * / %

// let sum = num1 + num2;
// let res = num1 - num2;
// let mul = num1 * num2;
// let div = num1 / num2;
// let mod = num1 % num2;
// let exp = num1 ** num2;

// console.log(sum);

// let exit = confirm("Estas seguro que queres salir?");
// console.log(exit);
// let url = "https://google.com";
// // condicionales
// //if(condicion){verdadera}else(falsa)
// // en las asignaciones usamos un solo = en las comparaciones se usa dos ==
// if (exit == true) {
//   window.open(url);
// } else {
//   console.log("quiere cerrar");
//   window.close();
// }

let nota = parseInt(prompt("Ingresa tu nota"));
// Condición
if (nota < 5) {
  calificacion = "Suspendido";
} else {
  calificacion = "Aprobado";
}
document.write("Tu calificación es: " + calificacion);


// gabriel ejemplo

// document.write(parseInt(prompt("Ingresa tu nota")) < 5 ? "NO E" : "E") + ("stoy aprobado")

// Operador ternarios:::: condición ? expresión_si_verdadero : expresión_si_falso