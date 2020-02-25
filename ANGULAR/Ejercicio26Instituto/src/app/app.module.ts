import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarComponent } from 'src/COMPONENTES/BUSCAR/buscar.component';
import { DepartamentoComponent } from 'src/COMPONENTES/DEPARTAMENTOS/departamentos.component';
import { FamiliasComponent } from 'src/COMPONENTES/FAMILIAS/familias.component';
import { InicioComponent } from 'src/COMPONENTES/INICIO/inicio.component';
import { NavegacionComponent } from 'src/COMPONENTES/NAVEGACION/navegacion.component';
import { PaginaNotFoundComponent } from 'src/COMPONENTES/PAGINANOTFOUND/paginanotfound.component';
import { PieComponent } from 'src/COMPONENTES/PIE/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    DepartamentoComponent,
    FamiliasComponent,
    InicioComponent,
    NavegacionComponent,
    PaginaNotFoundComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
