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

  departamentos:Ciclo []=CICLOS;

  /*getDepartamentos():Ciclo []{
    this.departamentos=CICLOS;
    return this.departamentos;
  } Metodo normal sin observable*/

  /*getDepartamento(id:string){
    parseInt(id);
    this.departamentos=CICLOS[id];
    return this.departamentos;
  }Metodo normal sin obserbable*/

  getDepartamentos():Observable<Ciclo []> { 
    return of(this.departamentos); 
  }//Con obserblable

  getDepartamento(id:string):Observable<Ciclo []> {
    parseInt(id);
    return of(this.departamentos[id]); 
  }
}
