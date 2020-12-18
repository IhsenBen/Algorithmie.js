function deviner(){
    let lesserlimit=10;
    let biggerlimit=20;
    let compteur=1;
    let usertry=document.getElementById("devinette").value;
    if (biggerlimit<usertry){
        compteur++;
        document.getElementById("message_devi").innerHTML="plus Petit!";
        
    }
    else if (usertry < lesserlimit){
        compteur++;
        document.getElementById("message_devi").innerHTML="plus Grand!";
    }
     else{
        document.getElementById("message_devi").innerHTML="Bravo! WOOOOw! Vous Avez trouve en" + compteur +"essais! T'es Genial Alexis! :)";
        
    }
};