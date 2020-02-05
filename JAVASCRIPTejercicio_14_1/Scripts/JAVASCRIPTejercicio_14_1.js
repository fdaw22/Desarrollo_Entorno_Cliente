window.onload=function iniciar(){
    document.getElementById('b1').addEventListener('click', guardarConfiguracion);
    document.getElementById('b2').addEventListener('click', aplicarConfiguracion);
    document.getElementById('b3').addEventListener('click', limipiarAlmacenaminetoLocal)
}
var colorFuente;
var colorFondo1;
var colorFondo2;
var tipoFuente;
function guardarConfiguracion(){
    if(typeof localStorage != "undefined"){
        colorFuente=document.getElementById('i1').value;
        localStorage.setItem("colorFuente", colorFuente);

        colorFondo1=document.getElementById('i2').value;
        localStorage.setItem("colorFondo1", colorFondo1);

        colorFondo2=document.getElementById('i3').value;
        localStorage.setItem("colorFondo2", colorFondo2);

        tipoFuente=document.getElementById('i4').value;
        localStorage.setItem("tiporFuente", tipoFuente);
    }
    else{
        alert("localStorage no soportado");
    }

}
function aplicarConfiguracion(){
    if(typeof localStorage != "undefined"){
        colorFuente=localStorage.getItem("colorFuente");
        colorFondo1=localStorage.getItem("colorFondo1");
        colorFondo2=localStorage.getItem("colorFondo2");
        tipoFuente=localStorage.getItem("tipoFuente");

        document.getElementById("body").style.setProperty("--color-letra",colorFuente);
        document.getElementById("body").style.setProperty("--verde-color",colorFondo1);
        document.getElementById("body").style.setProperty("--naranja-color",colorFondo2);
        document.getElementById("body").style.setProperty("--fuente-letra",tipoFuente);

    }
    else{
        alert("localStorage no soportado");
    }
}
function limipiarAlmacenaminetoLocal(){
    localStorage.clear();
}
