import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Ciclo} from '../../app/MODELOS/ciclo.mode';
import { DepartamentosService } from 'src/app/SERVICIOS/departamentos.service';

@Component({
  selector: 'app-aulasdepar',
  templateUrl: './aulasdepar.component.html'
})
export class AulasdeparComponent {
  title = 'Ejercicio26Instituto';

  id:any;
  ciclo: Ciclo [];
  
  constructor(private route: ActivatedRoute, private departamentosServicio: DepartamentosService){
    this.id=this.route.parent.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    //this.ciclo = this.departamentoServicio.getDepartamentos().find(item => item.id === this.id); atraves de la funcio fin de arrays
    //this.ciclo = this.departamentoServicio.getDepartamento(this.id);con metodos normales sin observable
    this.departamentosServicio.getDepartamento(this.id).subscribe( dpts => this.ciclo= dpts );//con observable
  }
}
