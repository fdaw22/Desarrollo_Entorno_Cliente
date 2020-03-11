import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  title = 'Ejercicio26Instituto';
  id:string="hola";
  nombre:string="";
  descripcion:string="";
  imagen:string="";
}
