function hypotenuse(){
    var coteA= document.getElementById("coteA").value;
    var coteB= document.getElementById("coteB").value;

    document.getElementById("resultat_saisie").innerHTML ="Cote C ="+(Math.hypot(coteA, coteB));
    document.getElementById("vcotea").innerHTML="cote A="+coteA;
    document.getElementById("vcoteb").innerHTML="Cote B="+coteB;
}



