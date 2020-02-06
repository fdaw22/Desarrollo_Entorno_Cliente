import { Component } from '@angular/core';

//Declaramos las variables
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio24';
//Preguntar a pablo como hacer para agregar esta funcion al onload de la página
public crearLista(){
  alert("Cara polla");
  var modulos=["Informática", "Administración", "Electricidad"];
  var j=1;
  for(var i=0; i<modulos.length;i++){
    $(".list-group").append("<li class='list-group-item'>"+j+" - "+modulos[i]+"</li>");
    j++;
  }
}

}
