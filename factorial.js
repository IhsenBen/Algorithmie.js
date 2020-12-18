function show(){

    var i, no, fact;
    fact=1;
    no=Number(document.getElementById("num_fac").value);
    for(i=1; i<=no; i++)  
    {
    fact= fact*i;
    }  
    document.getElementById("rfac").innerHTML= fact;
    document.getElementById("bloc_fac").style.display = "block";
    }

    function reponsefac_yes(){
        document.getElementById("bloc_fac").style.display = "none";
        document.getElementById("num_fac").value='';
      };
      
      function reponsefac_non(){
        document.getElementById("rfac").innerHTML =
        "Merci et aurevoi !";
        
      }