    var y=0;          
    var x=0;
    var controlY=1; 
    var controlX=1; 
    var velocidad=1;

    // Cada 6 mili-segundos se va a ejecutar la función mover que comprueba las colisiones de la pelota
     var intervalo=setInterval("mover()",6);

 function mover(){
     //Eje Y
     if(controlY==1){
         y+=velocidad;
     }else{        
         y-=velocidad;
     }
     if(y<=0){
         controlY=1;
         y=0;
     }else if(y>=document.getElementById("contenedor2").offsetHeight-200){
    // Esto significa si y es mayor o igual a la altura que tiene el contenedor menos el tamaño de la imagen

        controlY=0;
         y=document.getElementById("contenedor2").offsetHeight-200;
     }

//Eje X
     if(controlX==1){
         x+=velocidad;
     }else{        
         x-=velocidad;
     }
     if(x<=0){
         controlX=1;
         x=0;
     }else if(x>=document.getElementById("contenedor2").offsetWidth-200){
    //Esto significa si x es mayor o igual a la anchura del contenedor menos la anchura de la imagen
         controlX=0;
         x=document.getElementById("contenedor2").offsetWidth-200;
     }
     document.getElementById("pelota").style.left=String(x)+"px";
     document.getElementById("pelota").style.top=String(y)+"px";
 }

 var contador_s=0;
 var contador_m=0;
 var contador_h=0;

setInterval(contador, 1000);

function contador(){
    contador_s++;

    if(contador_s<10){
        document.getElementById('segundos').innerHTML='0'+contador_s;
    }else{
        document.getElementById('segundos').innerHTML=contador_s;
    }

    if(contador_s==60){
        contador_s=0;
        contador_m++;
        if(contador_m<10){
            document.getElementById('minutos').innerHTML='0'+contador_m;
        }else{
            document.getElementById('minutos').innerHTML=contador_m;
        }
        if(contador_m==60){
            contador_m==0;
            contador_h++;
            if(contador_h<10){
                document.getElementById('minutos').innerHTML='0'+contador_h;
            }else{
                document.getElementById('minutos').innerHTML=contador_h;
            }
            if(contador_h==24){
                contador_s=0;
                contador_m=0;
                contador_h=0;
            }
        }
    }
}