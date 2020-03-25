import { Component,OnDestroy, OnInit} from '@angular/core';
import { ApiRestService } from 'src/app/SERVICIOS/api-rest.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
  title = 'Ejercicio26Instituto';
  
  dtOptions: DataTables.Settings = {};
  pais:any[]=[];
  dtTrigger: Subject<any> = new Subject();

  constructor(private ApiRest:ApiRestService){
  }
  ngOnInit(): void {
    this.dtOptions = {pagingType: 'full_numbers', pageLength: 2};
    this.ApiRest.getAllIdiomas().subscribe(paises => {console.log(paises)});
    this.ApiRest.getAllIdiomas().subscribe(paises => {this.pais=paises; this.dtTrigger.next();});
    alert(this.pais);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
