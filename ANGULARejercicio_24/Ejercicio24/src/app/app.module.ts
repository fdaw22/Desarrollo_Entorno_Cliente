import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/COMPONENTES/HEADER/header.component';
import { BodyComponent } from 'src/COMPONENTES/BODY/body.component';
import { FooterComponent } from 'src/COMPONENTES/FOOTER/footer.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    BodyComponent, 
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
