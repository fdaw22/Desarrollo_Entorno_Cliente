import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import{registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es';

registerLocaleData(localEs);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarComponent } from 'src/COMPONENTES/BUSCAR/buscar.component';
import { DepartamentoComponent } from 'src/COMPONENTES/DEPARTAMENTOS/departamentos.component';
import { FamiliasComponent } from 'src/COMPONENTES/FAMILIAS/familias.component';
import { InicioComponent } from 'src/COMPONENTES/INICIO/inicio.component';
import { NavegacionComponent } from 'src/COMPONENTES/NAVEGACION/navegacion.component';
import { PaginaNotFoundComponent } from 'src/COMPONENTES/PAGINANOTFOUND/paginanotfound.component';
import { PieComponent } from 'src/COMPONENTES/PIE/pie.component';
import { CiclosComponent } from 'src/COMPONENTES/CICLOS/ciclos.component';
import { AulasdeparComponent } from 'src/COMPONENTES/AULASDEPAR/aulasdepar.component';
import { ProfesdepartComponent } from 'src/COMPONENTES/PROFESDEPART/profesdepart.component';
import { from } from 'rxjs';
import { CapitalizePipe } from './PIPES/capitalize.pipe';
import { ListadoComponent } from 'src/COMPONENTES/LISTADO/listado.component';
import { FormularioComponent } from 'src/COMPONENTES/FORMULARIO/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    DepartamentoComponent,
    FamiliasComponent,
    InicioComponent,
    NavegacionComponent,
    PaginaNotFoundComponent,
    PieComponent,
    CiclosComponent,
    AulasdeparComponent,
    ProfesdepartComponent,
    CapitalizePipe,
    ListadoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
