function Puissance(){
    let Nombre = Number(document.getElementById("NumberX").value);
    let Exposant = Number(document.getElementById("puissance").value);
    let Reslutat = Math.pow(Nombre, Exposant);
    document.getElementById("resultat_puissance").innerHTML = "Le resultat de " + Nombre+" puissance "+ Exposant + " est "+ Reslutat;
    document.getElementById("Reslutat").value = "";
}