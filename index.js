
//--algo 1
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

//----algo2

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
  if (nombre > 0) {
    min = nombre;
  }

  if (nombre == 0) {
    document.getElementById("nombre_entier").innerHTML = somme;
    document.getElementById("min").innerHTML = min;
    document.getElementById("max").innerHTML = max;
    document.getElementById("moyenne").innerHTML = moyenne;
  };
};

function reset() {
  var somme = 0;
  var moyenne = undefined;
  var min = undefined;
  var max = undefined;
  document.getElementById("nombre_entier").innerHTML = somme;
  document.getElementById("min").innerHTML = min;
  document.getElementById("max").innerHTML = max;
  document.getElementById("moyenne").innerHTML = moyenne;
};


///algo 4
// 

// function typing(i, f){
//   result= i*f;
//   document.getElementById("multip").innerHTML += (`${i}*${f}=${result}`) + "</br>";        
// };

// function table(){  
//  for (let i=1;i<=10; i++){
//    for (let f=1;f<=10; f++){
//      setInterval(() => typing(i, f), 1000);

//      if (eventListenerFlag) break;
//    }
//  if (eventListenerFlag) break;
//  }
// }
function table(){
  
  for (let i=1;i<=10; i++){
    for (let f=1;f<=10; f++){
      
      
  
        result= i*f;
        
        document.getElementById("multip").innerHTML += (`${i}*${f}=${result}`) + "</br>"; 
       
      
    }
    
  }
  }



  
//   function to_stop(){
//      clearInterval(id);//--- tjrs marche pas -_-
//     document.getElementById("tableau").style.display = "none";//-- bidouiage mais ça marche pas ( setinterval loop over-rule)
//     document.getElementById("multip2").innerHTML=" :) ";// test

//   }
  
  function updateScroll(){
    var element = document.getElementById("tableau");
    element.scrollTop = element.scrollHeight;
}
 
  setInterval(updateScroll,300);

//   document.addEventListener('keydown', function(event) {
//     if(event.keyCode == 37) {
//         alert('Left was pressed');
//     }
//     else if(event.keyCode == 39) {
//         alert('Right was pressed');
//     }
// });

function sumofnaturalN (){
  let sumnumber = 0;
  number=6;


 for (let i = 1; i <= number; i++) {
    sumnumber += i;
 };

 document.getElementById("six_natural_numbers").innerHTML='Le résultat des 6 premiers entiers est '+ sumnumber;
};

