import { Component } from '@angular/core';
import { DepartamentosService } from 'src/app/SERVICIOS/departamentos.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentoComponent {
  title = 'Ejercicio26Instituto';

  dep:any[];

  constructor(private departamentoServicio: DepartamentosService){

    //this.dep= this.departamentoServicio.getDepartamentos(); con metodos normales sin obserbavle
    //alert(this.dep);
  }

  ngOnInit(){
    this.departamentoServicio.getDepartamentos().subscribe( dpts => this.dep= dpts );//Sucribirse al obserbavle
  }
}
