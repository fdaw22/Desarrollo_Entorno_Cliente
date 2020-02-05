
    function inicializar(){
        var nombre=document.getElementById("nombre");
        var email=document.getElementById("email");
        var tel = document.getElementById("telefono");
        var presupuesto= document.getElementById("presupuesto");

        nombre.addEventListener("keyup", Mayusculas);
        nombre.addEventListener("blur", ComprobarNombre);
        email.addEventListener("blur", ComprobarCorreo);
        tel.addEventListener("blur", ComprobarTel);
        presupuesto.addEventListener("blur",ComprobarPresupuesto);
    }
    
    function Mayusculas(){
        document.getElementById("nombre").value=document.getElementById("nombre").value.toUpperCase();
    }

    function ComprobarNombre(){
        var nombre=document.getElementById("nombre");
        var nom_valido=/^[A-Z]{2,20}$/;
        if(!nombre.value.match(nom_valido)){
            alert("El nombre introducido no corresponde con el esperado, por favor introduzca un nombre valido");
            nombre.focus();
        }
    }

    function ComprobarCorreo(){
        var email=document.getElementById("email");
        var email_valido=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        if(!email.value.match(email_valido)){
            alert("El correo no coincide con lo esperado, por favor introduzca un correovalido");
            email.focus();
        }
    }

    function ComprobarTel(){
        var tel= document.getElementById("telefono");
        var tel_valido=/^[0-9]{9}$/;

        if(!tel.value.match(tel_valido)){
            alert("El telefono nocoincide con lo esperado, por favor introduzca un nombre valido");
            tel.focus();
        }
    }

    function ComprobarPresupuesto(){
        var presupuesto=document.getElementById("presupuesto");
        
        if(presupuesto.value<50){
            alert("El presupuesto no coincide con lo esperado, profavor intoduzca un presupuesto valido");
            presupuesto.focus();
        }
    }

    
    