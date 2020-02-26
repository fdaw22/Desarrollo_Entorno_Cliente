import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartamentosService } from 'src/app/SERVICIOS/departamentos.service';

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
  constructor(private _route: ActivatedRoute, private departamentoServicio: DepartamentosService){
    this.id=this._route.snapshot.paramMap.get('id');
    alert(this.departamentoServicio.departamentos);
    this.auxiliar=this.departamentoServicio.departamentos;
   
  }

  ngOnInit() {
    for(var i=0;i<this.auxiliar.length;i++){
      if(this.auxiliar[i].id==this.id){
        this.deptnoFinal.push.apply(this.auxiliar[i]);
        //alert(this.deptnoFinal[i].ciclos);
      }
    }
  }


}
