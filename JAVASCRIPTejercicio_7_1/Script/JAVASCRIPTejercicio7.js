function CambiarArticulos(){
    document.getElementById("Presion").src="../Imagenes/InteriorLimpio.jpg";
    document.getElementById("CambioAceite").src="../Imagenes/ReprogramacionCoche.jpg";

    var tag1 = document.createElement("p");
    var strong = document.createElement("strong");
    var node1 = document.createTextNode("Manten el interio de tu coche limpio");
    strong.appendChild(node1);
    tag1.appendChild(strong);

    var padre1 =document.getElementById("textblog1");
    var hijo1 = document.getElementById("p1");

    padre1.replaceChild(tag1, hijo1);

    var tag2 = document.createElement("p");
    var text1 = document.createTextNode("Escrito el 29/10/2019 por: Admin");
    tag2.appendChild(text1);
    /*var em1 = document.createElement("em");
    var text2 = document.createTextNode("29/10/2019");
    em1.appendChild(text2);
    tag2.appendChild(em);
    var text3=document.createTextNode(" por: ");
    tag2.appendChild(text3);
    var em2 = document.createElement(em);
    var text4=document.createTextNode("Admin");
    em2.appendChild(text4);
    tag2.appendChild(em2);*/

    var hijo2=document.getElementById("p2");
    padre1.replaceChild(tag2, hijo2);

    var tag3 = document.createElement("p");
    var text2 = document.createTextNode("Consejos para mantener tu coche limpio durante el mayor tiempo posible");
    tag3.appendChild(text2);

    var hijo3=document.getElementById("p3");
    padre1.replaceChild(tag3, hijo3);





    var tag4 = document.createElement("p");
    var strong1 = document.createElement("strong");
    var node2 = document.createTextNode("Reprograma tu coche");
    strong1.appendChild(node2);
    tag4.appendChild(strong1);

    var padre2 = document.getElementById("textblog2");
    var hijo4 = document.getElementById("p4");

    padre2.replaceChild(tag4, hijo4);

    var tag5 = document.createElement("p");
    var text3 = document.createTextNode("Escrito el 06/03/2019 por: Admin");
    tag5.appendChild(text3);
    /*var em1 = document.createElement("em");
    var text2 = document.createTextNode("29/10/2019");
    em1.appendChild(text2);
    tag2.appendChild(em);
    var text3=document.createTextNode(" por: ");
    tag2.appendChild(text3);
    var em2 = document.createElement(em);
    var text4=document.createTextNode("Admin");
    em2.appendChild(text4);
    tag2.appendChild(em2);*/

    var hijo5=document.getElementById("p5");
    padre2.replaceChild(tag5, hijo5);

    var tag6 = document.createElement("p");
    var text4 = document.createTextNode("Reprograma tu coche para poder conseguir ese extra de potencia que notas que le flata a tu coche");
    tag6.appendChild(text4);

    var hijo6=document.getElementById("p6");
    padre2.replaceChild(tag6, hijo6);

}

function AniadirImagen1(){
    var tag7 = document.createElement("img");
    tag7.setAttribute("src","../Imagenes/Volante2.jpg")
    /*tag7.src="../Imagenes/Volante2.jpg";*/

    //var padre3 = document.getElementById("imagen1");
    var hijo7 = document.getElementById("i1");

    //padre3.insertBefore(tag7,hijo7);

    if(hijo7.nextSibling){ 
        hijo7.parentNode.insertBefore(tag7,hijo7.nextSibling); 
    } else { 
        hijo7.parentNode.appendChild(tag7); 
    }
}

function AniadirImagen(tipo){
    var crear=document.createElement("img");
    var hijo;
    var crear2 = document.createElement("p");
    var texto;
    var hijo2;
    if(tipo=="i1"){
        
        crear.setAttribute("src","../Imagenes/Volante2.jpg");
        /*tag7.src="../Imagenes/Volante2.jpg";*/

        
        hijo = document.getElementById("i1");


        texto=document.createTextNode("Volantes de alta calidad para competicion.")
        crear2.appendChild(texto);

        hijo2=document.getElementById("p1");

        if(hijo.nextSibling || hijo2.nextSibling){
        
            hijo.parentNode.insertBefore(crear,hijo.nextSibling);
            hijo2.parentNode.insertBefore(crear2,hijo2.nextSibling);
        } else { 
            hijo.parentNode.appendChild(crear);
            hijo.parentNode.appendChild(crear2); 
        }
    }

    else if(tipo=="i2"){
        crear.setAttribute("src","../Imagenes/Neumaticos2.jpg");
        
        hijo = document.getElementById("i2");

        texto=document.createTextNode("Neumaticos de alta calidad");
        crear2.appendChild(texto);

        hijo2=document.getElementById("p2");

        if(hijo.nextSibling || hijo2.nextSibling){ 
            hijo.parentNode.insertBefore(crear,hijo.nextSibling); 
            hijo2.parentNode.insertBefore(crear2,hijo2.nextSibling);
        } else { 
            hijo.parentNode.appendChild(crear);
            hijo2.parentNode.appendChild(crear2);
        } 
    }
    else if(tipo=="i3"){
        crear.setAttribute("src","../Imagenes/Turbo2.jpg");

        hijo = document.getElementById("i3");

        texto=document.createTextNode("Turbos de alto rendimiento y presion para mejorar la potencia de su diesel.");
        crear2.appendChild(texto);

        hijo2=document.getElementById("p3");


        if(hijo.nextSibling || hijo2.nextSibling){ 
            hijo.parentNode.insertBefore(crear,hijo.nextSibling);
            hijo2.parentNode.insertBefore(crear2, hijo2.nextSibling);
        } else { 
            hijo.parentNode.appendChild(crear); 
            hijo2.parentNode.appendChild(crear2);
        } 
    }
}


