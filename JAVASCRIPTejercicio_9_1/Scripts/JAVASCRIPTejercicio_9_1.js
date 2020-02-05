window.onload=function(){document.onkeydown=mover};

function mover(event){
    
    var barra=document.getElementById("barra");
    var posicionY=barra.offsetLeft;
    var posicionX=barra.offsetTop;

    if(event.key=="a"){
        barra.style.left = posicionY-15+"px";
    }
    else if(event.key=="w"){
        barra.style.top = posicionX-15+"px";
    }
    else if(event.key=="d"){
        barra.style.left = posicionY+15+"px";
    }
    else if(event.key=="s"){
        barra.style.top = posicionX+15+"px";
    }
    else{
        alert("Error, pulse una tecla valida W, A, S, D");
    }
}