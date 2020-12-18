//algo3
document.getElementById("userinput").addEventListener("change", agevalue);
function agevalue(){
  var lage = document.getElementById("userinput").value;
  if (lage < 18){
    document.getElementById("lareponse").innerHTML =
    "Erreur ! Ce programme est réservé aux personnes majeures";
    document.getElementById("bloc_age").style.display = "block";
  }
  if (lage>= 18 && lage<=26){
    document.getElementById("lareponse").innerHTML =
    "Vous avez un statut jeune";
    document.getElementById("bloc_age").style.display = "block";
  }
  if (lage>26 && lage<65){
    document.getElementById("lareponse").innerHTML =
    "Vous avez un statut Adulte";
    document.getElementById("bloc_age").style.display = "block";
  }
 else {
  document.getElementById("lareponse").innerHTML =
  "Erreur : ce Programme est réservé aux personnes non retraitées";
  document.getElementById("bloc_age").style.display = "block";
 };

};

function reponse_yes(){
  document.getElementById("bloc_age").style.display = "none";
  var lage = document.getElementById("userinput").value='';
};

function reponse_non(){
  document.getElementById("lareponse").innerHTML =
  "Merci et aurevoi !";
  
}
