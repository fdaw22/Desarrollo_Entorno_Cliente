import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoComponent } from 'src/COMPONENTES/DEPARTAMENTOS/departamentos.component';
import { FamiliasComponent } from 'src/COMPONENTES/FAMILIAS/familias.component';
import { PaginaNotFoundComponent } from 'src/COMPONENTES/PAGINANOTFOUND/paginanotfound.component';
import { InicioComponent } from 'src/COMPONENTES/INICIO/inicio.component';
import { CiclosComponent } from 'src/COMPONENTES/CICLOS/ciclos.component';


const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'Departamento',component: DepartamentoComponent},
  {path:'Familias',component: FamiliasComponent},
  {path:'Ciclos/:id',component: CiclosComponent},
  {path:'**', component:PaginaNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
