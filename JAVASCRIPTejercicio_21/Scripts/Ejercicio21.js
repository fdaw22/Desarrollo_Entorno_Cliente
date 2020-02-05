window.onload=function iniciar(){
   this.crearBaseDatos();
  //this.modificarBaseDatos();
   document.getElementById('aniadir').addEventListener('click',modificarBaseDatos);
   
}
function Cliente(id, nombre, apellido, correo, cumpleanios){
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
    this.correo=correo;
    this.cumpleanios=cumpleanios;
}

function ObtenerNombre(){
    var nombre=document.getElementById("nombre").value;
    return nombre;
}

function ObtenerApellido(){
    var apellido=document.getElementById("apellido").value;
    return apellido;
}

function ObtenerCorreo(){
    var correo=document.getElementById("email").value;
    return correo;
}

function ObtenerCumpleanios(){
    var cumpleanios=document.getElementById("fecha").value;
    return cumpleanios;
}

var Clientes= [];
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var dataBase=null;

function CargarArray(){
    //Creamos nuestro cliente Cli
    var Cli = new Cliente(Clientes.length+1,ObtenerNombre(),ObtenerApellido(),ObtenerCorreo(),ObtenerCumpleanios());
    //Aniadimos nuestro clientes al array
    Clientes.push(Cli);
    //Abrimos la base de datos o hacemos una solicitud
    dataBase=indexedDB.open("ClientesDB",1);
    //Actualizaremos la estructura de la base de datos con un numero de version
    dataBase.onupgradeneeded=function(e){
        //Recuperamos el resultado de la conexion con la base de datos y tendremos el conector
        var active=dataBase.result;
        //Creamos el objeto options con un id unico de cada cliente y que se autoincrementado
        //Creamos una almacen de objetos recibe le nombre del almacen y el segundo son las opciones un objeto options
        var object = active.createObjectStore('people',{keyPath:'id', autoIncrement:true});
        object.createIndex('by_nombre', 'nombre', {unique:false});
        object.createIndex('by_apellido', 'apellido', {unique:false});
        object.createIndex('by_correo', 'correo', {unique:false});
        object.createIndex('by_cumpleanios', 'cumpleanios', {unique:false});   
    }
    //Exito al iniciar la base de datos
    dataBase.onsuccess=function(e){
        alert("Database loaded");
    }
    //Error en la base de datos
    dataBase.onerror=function(e){
        alert("Error loading database");
    }
}
function crearBaseDatos(){
    var db;
    var request=indexedDB.open("miBaseDatos",1);
    request.onupgradeneeded=function(){
        var db = request.result;
        var objectStore=db.createObjectStore("clientes",{keyPath:"id"});
        //Guardar los datos en el almacen recien creado.
        alert("Creado almacen");
    };// fin onupgradeneeded

    request.onsuccess=function(){
        alert("Creada la Base de Datos con exito");
    }
}

function modificarBaseDatos(){
    var db;
    var request = indexedDB.open("miBaseDatos",2);
    request.onupgradeneeded=function(evento){
        var db=request.result;
        if(evento.oldVersion<2){
            //Version 2 introduce dos indices
            var objectStore=request.transaction.objectStore("clientes");
            var nomIndex = objectStore.createIndex("by_nom","nombre");
            var corIndex = objectStore.createIndex("by_email", "correo", {unique:true});
            //aniadiendo un cliente
            //Creamos nuestro cliente Cli
            var Cli = new Cliente(Clientes.length+1,ObtenerNombre(),ObtenerApellido(),ObtenerCorreo(),ObtenerCumpleanios());
            //Aniadimos nuestro clientes al array
            Clientes.push(Cli);
            for(var i=0; i<Clientes.length;i++){
            objectStore.put({id:Clientes[i].id,nombre:Clientes[i].nombre,apellido:Clientes[i].apellido,correo:Clientes[i].correo,cumpleanios:Clientes[i].cumpleanios,version:4})
            }
        };
    };//fin onupgradeneeded

    request.onsuccess=function(evento){
        alert("modificada");
    }
}

function guardarBaseDatos(){
    var db;
    var request=indexedDB.open("miBaseDatos",2);
    request.onerror=function(event){
        //Error generico manejador de todos los errores dirigidos a esta solicitud de acceso a base de datos
        alert("Database error: "+request.error);
    }
    request.onsuccess=function(){
        db=request.result;
        var tx=db.transaction(["clientes"],"readwrite");
        var objectStore=tx.objectStore("clientes");
         //Creamos nuestro cliente Cli
        var clientes = new Cliente(Clientes.length+1,ObtenerNombre(),ObtenerApellido(),ObtenerCorreo(),ObtenerCumpleanios());
        //Aniadimos nuestro clientes al array
            for(var i in clientes){
                objectStore.add(clientes[i]);
            }
        db.close();
        alert("aniadidos clientes")
    }
}