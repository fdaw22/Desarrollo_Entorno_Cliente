/*window.onload=function(){
    document.getElementById("op2").onselect=ciudades;
    document.getElementById("op3").onselect=ciudades;
    document.getElementById("op4").onselect=ciudades;
    document.getElementById("op5").onselect=ciudades;
}*/

var asturias=["Oviedo", "Gijon", "Aviles"];
var alicante=["Elche", "Benidorm", "Torrevieja"];
var madrid=["Mostoles", "Fuenlabrada", "Coslada"];
var barcelona=["Tarrasa", "Badalona", "Barcelona"];
function ciudades(id){
    //alert(id);
    var vacio=document.getElementById("ciudad");
    
    if(vacio.hasChildNodes()){
        while(vacio.childNodes.length>=1){
            vacio.removeChild(vacio.firstChild);
        }
    }

    if(id=="op2"){
        
        for(var i=0; i<asturias.length;i++){
            var opcion=document.createElement("option");
            var texto=document.createTextNode(asturias[i]);
            opcion.appendChild(texto);
            opcion.setAttribute("class","opc");
            document.getElementById("ciudad").appendChild(opcion);
        }
    }
    else if(id=="op3"){
        for(var i=0; i<alicante.length;i++){
            var opcion=document.createElement("option");
            var texto=document.createTextNode(alicante[i]);
            opcion.appendChild(texto);
            opcion.setAttribute("class","opc");
            document.getElementById("ciudad").appendChild(opcion);
        }
    }
    else if(id=="op4"){
        for(var i=0; i<madrid.length;i++){
            var opcion=document.createElement("option");
            var texto=document.createTextNode(madrid[i]);
            opcion.appendChild(texto);
            opcion.setAttribute("class","opc");
            document.getElementById("ciudad").appendChild(opcion);
        }
    }
    else if(id=="op5"){
        for(var i=0; i<barcelona.length;i++){
            var opcion=document.createElement("option");
            var texto=document.createTextNode(barcelona[i]);
            opcion.appendChild(texto);
            opcion.setAttribute("class","opc");
            document.getElementById("ciudad").appendChild(opcion);
        }
    }

}