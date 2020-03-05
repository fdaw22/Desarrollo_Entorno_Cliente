import { Injectable } from '@angular/core';
import{Ciclo} from '../MODELOS/ciclo.mode';
import{CICLOS} from '../mocks'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor() { 

  }

  departamentos:Ciclo [];

  getDepartamentos():Ciclo []{
    this.departamentos=CICLOS;
    return this.departamentos;
  }

  /*getDepartamento(id:string){
    this.departamentos=CICLOS[id];
    return this.departamentos;
  } Preguntar 0J0*/
}
