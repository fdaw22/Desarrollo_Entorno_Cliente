import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoComponent } from 'src/COMPONENTES/DEPARTAMENTOS/departamentos.component';
import { FamiliasComponent } from 'src/COMPONENTES/FAMILIAS/familias.component';
import { AppComponent } from './app.component';
import { PaginaNotFoundComponent } from 'src/COMPONENTES/PAGINANOTFOUND/paginanotfound.component';


const routes: Routes = [
  {path:'',component: AppComponent},
  {path:'Departamento',component: DepartamentoComponent},
  {path:'Familias',component: FamiliasComponent},
  {path:'**', component:PaginaNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
