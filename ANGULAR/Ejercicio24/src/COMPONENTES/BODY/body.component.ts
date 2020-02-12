import { Component } from '@angular/core';

//Declaramos las variables
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {
  title = 'Ejercicio24';
  ngOnInit(){
    //alert("Cara polla");
    var modulos=["Informática", "Administración", "Electricidad"];
    var j=1;
    for(var i=0; i<modulos.length;i++){
      $(".list-group").append("<li class='list-group-item'>"+j+" - "+modulos[i]+"</li>");
      j++;
    }
  }
  public mostrarTitulo(){
    console.log("click");
 
   // Usamos jQuery con normalidad
    $("#title").slideToggle();
  }

}
