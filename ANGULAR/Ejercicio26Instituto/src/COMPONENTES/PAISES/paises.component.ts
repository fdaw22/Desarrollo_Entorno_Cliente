import { Component } from '@angular/core';
import { ApiRestService } from 'src/app/SERVICIOS/api-rest.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
  title = 'Ejercicio26Instituto';
  
  dtOptions: DataTables.Settings = {};
  pais:any[];

  constructor(private ApiRest:ApiRestService){
  }
  ngOnInit(): void {
    this.dtOptions = {pagingType: 'full_numbers'};
    this.ApiRest.getAllIdiomas().subscribe(paises => {console.log(paises)});
    this.ApiRest.getAllIdiomas().subscribe(paises => this.pais=paises);
    alert(this.pais);
  }
}
