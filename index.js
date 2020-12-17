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

//----

var somme = 0;
var compteur = 0;
var moyenne = 0;
var min = 0;
var max = 0;




function getnumber() {
  nombre = document.getElementById("userNumber").value;
  
if (nombre != 0) {
    compteur = compteur + 1;
    somme = parseInt(nombre) + somme;
    moyenne = somme / compteur;
}
if (nombre > max) {
  max = nombre;
}
if ( nombre>0) {
  min = nombre;
  }

  if (nombre == 0) {
    document.getElementById("nombre_entier").innerHTML = somme;
    document.getElementById("min").innerHTML = min;
    document.getElementById("max").innerHTML = max;
    document.getElementById("moyenne").innerHTML = moyenne;
   
  }
;
}



function reset() {
  var somme =0;
  var moyenne = undefined;
  var min = undefined;
  var max = undefined
    document.getElementById("nombre_entier").innerHTML = somme;
    document.getElementById("min").innerHTML = min;
    document.getElementById("max").innerHTML = max;
    document.getElementById("moyenne").innerHTML = moyenne;
}
 

// function calculation(){
// while (nombre>0) {
//   if (nombre < min) {
//     min = nombre;
//   }

//   if (nombre > max) {
//     max = nombre;
//   }

//   compteur = compteur + 1;
//   some = nombre + some;
//   moyenne = some / compteur;

// }
// }
// document.getElementById("nombre_entier").innerHTML = some;
// document.getElementById("min").innerHTML = min;
// document.getElementById("max").innerHTML = max;
// document.getElementById("moyenne").innerHTML = moyenne;


///algo 4



function table(){
  for (let i=1;i<=10; i++){
    for (let f=1;f<=10; f++){
      result= i*f;
      document.getElementById("multip").innerHTML += (`${i}*${f}=${result}`) + "</br>";
      
    }
  }
  }

  
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        alert('Left was pressed');
    }
    else if(event.keyCode == 39) {
        alert('Right was pressed');
    }
});



// let sum = 0;

// // looping from i = 1 to number
// // in each iteration, i is increased by 1
// for (let i = 1; i <= number; i++) {
//     sum += i;
// }

// console.log('The sum of natural numbers:', sum);




