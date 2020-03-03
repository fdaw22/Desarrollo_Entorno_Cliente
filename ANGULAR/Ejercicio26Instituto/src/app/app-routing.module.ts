import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoComponent } from 'src/COMPONENTES/DEPARTAMENTOS/departamentos.component';
import { FamiliasComponent } from 'src/COMPONENTES/FAMILIAS/familias.component';
import { PaginaNotFoundComponent } from 'src/COMPONENTES/PAGINANOTFOUND/paginanotfound.component';
import { InicioComponent } from 'src/COMPONENTES/INICIO/inicio.component';
import { CiclosComponent } from 'src/COMPONENTES/CICLOS/ciclos.component';
import { ProfesdepartComponent } from 'src/COMPONENTES/PROFESDEPART/profesdepart.component';
import { AulasdeparComponent } from 'src/COMPONENTES/AULASDEPAR/aulasdepar.component';


const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'Departamento',component: DepartamentoComponent},
  {path:'Familias',component: FamiliasComponent},
  {path:'Ciclos/:id',component: CiclosComponent,
  children:[
    {path:'prof',component:ProfesdepartComponent},
    {path:'aula',component:AulasdeparComponent}
  ]},
  {path:'**', component:PaginaNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}