window.onload=function llamar(){
    leerFormulario();
}

function leerFormulario(){
    var URL=location.search;
    var decodificado = decodeURIComponent(URL);
    var split=decodificado.split("&");
    var index;
    var valor=[];
    
    for(var i=0; i<split.length; i++){
        index=split[i].indexOf("=");
        valor[i]=split[i].substring(index+1,split[i].length);
    }
 
    var datos={nombre:valor[0], email:valor[1], telefono:valor[2], mensaje:valor[3], vende_compra:valor[4], presupuesto:valor[5], correo_email:valor[6], fecha:valor[7], hora:valor[8]};
    //alert(Object.values(datos));

    text="";

    for(var i in datos){
        text+=datos[i]+" ";
    }
    document.getElementById("datos").innerHTML=text;
}
