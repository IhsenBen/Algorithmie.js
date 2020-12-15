document.getElementById("age").addEventListener("change", verif);

function verif() {
  age = document.getElementById("age").value;
  if (age < 18) {
    document.getElementById("txt").innerHTML =
      "Programme réservé aux personnes majeures!";
  } else if (age <= 26) {
    document.getElementById("txt").innerHTML = "Statut JEUNE!";
  } else if (age <= 65) {
    document.getElementById("txt").innerHTML = "Statut ADULTE!";
  } else if (65 < age) {
    document.getElementById("txt").innerHTML =
      "Erreur! Ce programme s'adapte aux personnes non-retraitées";
  }
}

// take input from the user
// const number = parseInt(prompt('Enter a positive integer: '));

// let sum = 0;

// // looping from i = 1 to number
// // in each iteration, i is increased by 1
// for (let i = 1; i <= number; i++) {
//     sum += i;
// }

// console.log('The sum of natural numbers:', sum);

var some = 0;
var compteur = 0;
var moyenne = 0;
var min = 0;
var max = 0;

var nombre = parseInt(prompt("Enter a positive integer: "));

while (nombre !=0) {
  if (nombre < min) {
    min = nombre;
  }

  if (nombre > max) {
    max = nombre;
  }

  compteur = compteur + 1;
  some = nombre + some;
  moyenne = some / compteur;
  nombre = parseInt(prompt("Enter a positive integer: "));
}
document.getElementById("nombre_entier").innerHTML = some;
document.getElementById("min").innerHTML = min;
document.getElementById("max").innerHTML = max;
document.getElementById("moyenne").innerHTML = moyenne;


//3
// var x = prompt("are u retarded?");
// if (x === "Yes") {
// alert("Hell yeah u are!");
// }