import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent {
  title = 'Ejercicio26Instituto';

  id:any;
  constructor(private _route: ActivatedRoute){
    this.id=this._route.snapshot.paramMap.get('id');
    alert(this.id);
  }
}
