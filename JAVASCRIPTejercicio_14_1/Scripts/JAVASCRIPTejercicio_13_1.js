window.onload=function iniciar(){
    document.getElementById('b1').addEventListener('click', guardarConfiguracion);
    document.getElementById('b2').addEventListener('click', aplicarConfiguracion);
}

function guardarConfiguracion(){
    if(!navigator.cookieEnabled){
        alert('Las cookies de su navegador no estan activadas, por favor vaya a los ajustes de su navegador y cambie la configuracion.');
    }
    
    document.cookie = "colorLetra=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie="colorFondo1=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie="colorFondo2=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie="tipoFuente=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    document.cookie="colorLetra="+document.getElementById('i1').value;
    document.cookie="colorFondo1="+document.getElementById("i2").value;
    document.cookie="colorFondo2="+document.getElementById("i3").value;
    document.cookie="tipoFuente="+document.getElementById("i4").value;

}
function aplicarConfiguracion(){
    var ck =document.cookie;
    var datos=ck.split(";");
    var indice;
    var valores=[];
    for(var i=0; i<datos.length; i++){
        indice=datos[i].indexOf("=");
        valores[i]=datos[i].substring(indice+1,datos[i].length);
    }


    document.getElementById("body").style.setProperty("--color-letra",valores[0]);
    document.getElementById("body").style.setProperty("--verde-color",valores[1]);
    document.getElementById("body").style.setProperty("--naranja-color",valores[2]);
    document.getElementById("body").style.setProperty("--fuente-letra",valores[3]);
    //devemos de cambiar todos los datos de las cookies para que no haya comflito
}