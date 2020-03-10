import { Component } from '@angular/core';
import { DepartamentosService } from 'src/app/SERVICIOS/departamentos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
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
