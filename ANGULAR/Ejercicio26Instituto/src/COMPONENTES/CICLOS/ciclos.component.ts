import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Ciclo} from '../../app/ciclo.mode';
import {CICLOS} from '../../app/mocks';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent {
  title = 'Ejercicio26Instituto';

  id:any;
  ciclo: Ciclo;
  
  constructor(private route: ActivatedRoute){
    this.id=this.route.snapshot.paramMap.get('id');
    //alert(this.id);
  }

  ngOnInit() {
    this.ciclo = CICLOS.find(item => item.id === this.id);
  }


}
