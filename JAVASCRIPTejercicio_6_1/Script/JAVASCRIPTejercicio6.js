function validar(){
    var nombre, email, telefono, mensaje, presupuesto, fecha_aux, fecha1;
    var correcto=true;
    var nom_valido, correo_valido, tel_valido, fecha_actual;
    var array;

    nom_valido=/^[A-Z]{1}[a-z]{2,20}$/;
    correo_valido=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    tel_valido=/^[0-9]{9,11}$/;
    fecha_actual=new Date();
    array=document.getElementsByTagName("input");

    nombre=document.getElementById("nombre");
    email=document.getElementById("email");
    telefono=document.getElementById("telefono");
    mensaje=document.getElementById("mensaje");
    presupuesto=document.getElementById("presupuesto");
    fecha=document.getElementById("fecha");
    fecha_aux=fecha.value.split("/");
    fecha1=new Date(parseInt(fecha_aux[2]),parseInt(fecha_aux[1]),parseInt(fecha_aux[0]));

    if(nombre.value==""){
        correcto=false;
        alert("El campo nombre se encuentra vacio");
        nombre.focus();
    }        
    else if(email.value==""){
        correcto=false;
        alert("El campo email se encuentra vacio");
        email.focus();
    }
    else if(telefono.value==""){
        correcto=false;
        alert("El campo telefono se encuentra vacio");
        telefono.focus();
    }
    else if(mensaje.value==""){
        correcto=false;
        alert("El campo mensaje se encuentra vacio");
        mensaje.focus();
    }
    else if(presupuesto.value==""){
        correcto=false;
        alert("El campo presupuesto se encuentra vacio");
        presupuesto.focus();
    }
    else if(presupuesto.value==""){
        correcto=false;
        alert("El campo presupuesto se encuentra vacio");
        presupuesto.focus();
    }
    else if(!nombre.value.match(nom_valido)){
        correcto=false;
        alert("El nombre ha de empezar por mayúscula y debe tener una longitud maxima de 20 caracteres y  minima de 3");
        nombre.focus();
    }
    else if(!email.value.match(correo_valido)){
        correcto=false;
        alert("El correo no esta bien formado, introduzca un correo valido");
        email.focus();
    }
    else if(!telefono.value.match(tel_valido)){
        correcto=false;
        alert("El numero de telefono no es valido, profavor introduzca un numero de correo valido");
        telefono.focus();
    }
    else if(presupuesto.value < 50){
        correcto=false;
        alert("El presupuesto es menor que 50");
        presupuesto.focus();
    }
    else if(fecha1 < fecha_actual){
        correcto=false;
        alert("La fecha introducida es menor que la actual, introduzca una fecha valida");
        fecha.focus();
    }

    /*for(var i=0; i<array.length-1;i++){
        var cadena;
        cadena+=array[i].value+","; 
    }

    alert(cadena);*/

    var datos={nombre:nombre.value, email:email.value, telefono:telefono.value, mensaje:mensaje.value, presupuesto:presupuesto.value, fecha:fecha.value};
    alert(Object.values(datos));

    return correcto;
}