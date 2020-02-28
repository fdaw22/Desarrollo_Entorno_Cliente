import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartamentosService } from 'src/app/SERVICIOS/departamentos.service';
import {Ciclo} from '../../app/MODELOS/ciclo.mode';
import { CICLOS } from '../mocks';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent {
  title = 'Ejercicio26Instituto';

  id:any;
  auxiliar:any [];
  deptnoFinal:any [];
  ciclosFinal:any[];
  ciclo: Ciclo;
  constructor(private _route: ActivatedRoute, private departamentoServicio: DepartamentosService){
    this.id=this._route.snapshot.paramMap.get('id');
    alert(this.departamentoServicio.departamentos);
    this.auxiliar=this.departamentoServicio.departamentos;
   
  }

  ngOnInit() {
    this.ciclo = Ciclo.find(item => item.id === id);
  }


}
