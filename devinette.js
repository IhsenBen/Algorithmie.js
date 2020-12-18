function deviner(){
    let lesserlimit=10;
    let biggerlimit=20;
    let usertry=document.getElementById("devinette").value;
    if (biggerlimit<usertry){
        document.getElementById("message_devi").innerHTML="plus Petit!";
    }
    else if (usertry < lesserlimit){
        document.getElementById("message_devi").innerHTML="plus Grand!";
    }
     else{
        document.getElementById("message_devi").innerHTML="Bravo! WOOOOw! T'es Genial Alexis!";
        
    }
};