
var imagenes1=['../Imagenes/Volante2.jpg','../Imagenes/Volante3.jpg','../Imagenes/Volante.jpg'];
var imagenes2=['../Imagenes/Neumaticos2.jpg','../Imagenes/Neumaticos3.jpg','../Imagenes/Neumaticos.jpg'];
var imagenes3=['../Imagenes/Turbo2.jpg','../Imagenes/Turbo3.jpg','../Imagenes/Turbo.jpg'];
var contador1=0;
var contador2=0;
var contador3=0;
//primera imagen
function cambiar1(){
    var imagen = document.getElementById("i1");
    //var imagenes=['../Imagenes/Volante2.jpg','../Imagenes/Volante3.jpg','../Imagenes/Volante.jpg'];

    
    imagen.src=imagenes1[contador1];
    
}

function iniciar1(){


    cambiar1();
    contador1++;
    setTimeout('cambiar1()',1000);
    
}

function acabar1(){
    var imagen=document.getElementById("i1");

    imagen.src='../Imagenes/Volante.jpg';
    contador1=0;
}
//segunda imagen
function cambiar2(){
    var imagen = document.getElementById("i2");
    //var imagenes=['../Imagenes/Volante2.jpg','../Imagenes/Volante3.jpg','../Imagenes/Volante.jpg'];

    
    imagen.src=imagenes2[contador2];
    contador2++;
}

function iniciar2(){

    cambiar2();

    setTimeout('cambiar2()',1000);

}

function acabar2(){
    var imagen=document.getElementById("i2");

    imagen.src='../Imagenes/Neumaticos.jpg';
    contador2=0;
}

//tercera imagen

function cambiar3(){
    var imagen = document.getElementById("i3");
    //var imagenes=['../Imagenes/Volante2.jpg','../Imagenes/Volante3.jpg','../Imagenes/Volante.jpg'];

    
    imagen.src=imagenes3[contador3];
    contador3++;
}

function iniciar3(){

    cambiar3();

    setTimeout('cambiar3()',1000);

}

function acabar3(){
    var imagen=document.getElementById("i3");

    imagen.src='../Imagenes/Turbo.jpg';
    contador3=0;
}
//Comprobar las cookies estan activadas

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
     alert("Bienvenido " + username);
    } else {
      username = prompt("Profavor introduzca su nombre:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
}
}

//Generar un color aleatorio en hexadecimal y agragarselo a el fondo del footer al hacer click sobre el

function GenerarColor(){

    var array=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var cadena="#"; 
    for(var i=0; i<6; i++){
        var random= Math.floor(Math.random()*(15-0)+0);
        cadena+=array[random];
    }

    return(cadena);
}

function Llamar(){

    var color=GenerarColor();
    document.getElementById('footer').style.background=color;
}
