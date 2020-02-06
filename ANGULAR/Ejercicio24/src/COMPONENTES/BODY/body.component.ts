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

  public mostrarTitulo(){
    console.log("click");
 
   // Usamos jQuery con normalidad
    $("#title").slideToggle();
  }

}
