import { Injectable } from '@angular/core';
import{Ciclo} from '../MODELOS/ciclo.mode';
import{CICLOS} from '../mocks'
import { Observable, of } from 'rxjs';

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

  /*getDepartamentos():<Observable:Ciclo[]>{
    return of(this.departamentos);
  }*/

  /*getDepartamento(id:string){
    this.departamentos=CICLOS[id];
    return this.departamentos;
  } Preguntar 0J0*/
}
