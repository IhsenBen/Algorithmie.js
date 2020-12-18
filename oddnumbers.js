function impair(){ 
    var i; 
    var compteur=0;
    for(i = 1; i <= 20; i++){ 
      if((i % 2) == 0){ 
       continue; //if num is odd, skip it. 
      } 
      else {
        compteur++;
        document.getElementById("twent_odd").innerHTML += i + "est le "+compteur+"eme nombre impair"+'<br/>'; 
        
      }
    
    } 
   } 