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

    this.dep= this.departamentoServicio.departamentos;
    //alert(this.dep);
  }

  ngOnInit(){
    
  }
}
