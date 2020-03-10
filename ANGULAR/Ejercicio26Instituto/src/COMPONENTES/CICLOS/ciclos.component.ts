import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Ciclo} from '../../app/MODELOS/ciclo.mode';
import { DepartamentosService } from 'src/app/SERVICIOS/departamentos.service';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent {
  title = 'Ejercicio26Instituto';

  id:any;
  ciclo: Ciclo[];
  
  constructor(private route: ActivatedRoute, private departementoServi:DepartamentosService){
    this.id=this.route.snapshot.paramMap.get('id');
    //alert(this.id);
  }

  ngOnInit() {
    //this.ciclo = this.departementoServi.getDepartamentos().find(item => item.id === this.id); con metodo find de arrays
    //this.ciclo = this.departementoServi.getDepartamento(this.id); con metodo normal
    this.departementoServi.getDepartamento(this.id).subscribe( dpts => this.ciclo= dpts );//con observable
  }


}
