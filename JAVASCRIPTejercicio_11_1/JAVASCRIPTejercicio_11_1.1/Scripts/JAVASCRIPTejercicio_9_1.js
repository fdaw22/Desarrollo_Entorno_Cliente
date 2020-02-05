window.onload=function(){document.onkeydown=mover};

function mover(event){
    
    var barra=document.getElementById("barra");
    var posicionY=barra.offsetLeft;
    var posicionX=barra.offsetTop;
        if(event.key=="a"){
            if(posicionY>12){
            barra.style.left = posicionY-15+"px";
            }
        }
        else if(event.key=="w"){
            if(posicionX>12){
            barra.style.top = posicionX-15+"px";
            }
        }
        else if(event.key=="d"){
            if(posicionY<1100){
            barra.style.left = posicionY+15+"px";
            }
        }
        else if(event.key=="s"){
            if(posicionX<250){
            barra.style.top = posicionX+15+"px";
            }
        }
        else{
            alert("Error, pulse una tecla valida W, A, S, D");
        }
}