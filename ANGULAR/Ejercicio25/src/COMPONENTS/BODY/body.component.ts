import { Component } from '@angular/core';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

//Declaramos las variables
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {
  title = 'Ejercicio25';

    familias=["Informática","Administración","Edificación","Electricidad"];
    mostrar:Boolean =true;

    mostrarTitulo(){
      this.mostrar=!this.mostrar;
      
      switch(this.mostrar){
        case true:
          document.getElementById("boton").innerHTML="Ocultar";
        break;
        case false:
          document.getElementById("boton").innerHTML="Mostrar";
        break;
      }

    }
    control:number=0;
    ciclosInf:any[]=[ {cod:"DAW",nombre:"Desarrollo de aplicaciones web"}, 
                      {cod:"DAM",nombre:"Desarrollo de aplicaciones multiplataforma"},
                      ];
    ciclosAdmin:any[]=[{cod:"ADM",nombre:"Administracion y finanzas"},
                      {cod:"ECO",nombre:"Economia Aplicada"},
                      {cod:"FIN",nombre:"Finanzas"}];
    ciclosEdif:any[]=[{cod:"CONST",nombre:"Construcciones e Instalaciones"},
                      {cod:"EDIF",nombre:"Edificacion"}];
    ciclosElectri:any[]=[{cod:"ELEAU",nombre:"Electricidad y automatismos"},
                        {cod:"MCI",nombre:"Microsistemas Informáticos"}]
    ver(j){
      j++;
      this.control=j;
    }

}