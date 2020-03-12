import { Component } from '@angular/core';
import { DepartamentosService } from 'src/app/SERVICIOS/departamentos.service';
import {Ciclo} from '../../app/MODELOS/ciclo.mode';
import { ActivatedRoute } from '@angular/router';

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
  dep:any[];
  identificador:any;
  ciclo: Ciclo [];

  constructor(private route: ActivatedRoute,private departamentoServicio: DepartamentosService){

    //this.dep= this.departamentoServicio.getDepartamentos(); con metodos normales sin obserbavle
    //alert(this.dep);
    this.identificador=this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(){
    this.departamentoServicio.getDepartamento(this.identificador).subscribe( dpts => this.ciclo= dpts );//con observable
  }
}