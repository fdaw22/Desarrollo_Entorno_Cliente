import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Ciclo} from '../../app/MODELOS/ciclo.mode';
import {CICLOS} from '../../app/mocks';

@Component({
  selector: 'app-profesdepart',
  templateUrl: './profesdepart.component.html'
})
export class ProfesdepartComponent {
  title = 'Ejercicio26Instituto';

  id:any;
  ciclo: Ciclo;
  
  constructor(private route: ActivatedRoute){
    this.id=this.route.parent.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.ciclo = CICLOS.find(item => item.id === this.id);
  }
}
