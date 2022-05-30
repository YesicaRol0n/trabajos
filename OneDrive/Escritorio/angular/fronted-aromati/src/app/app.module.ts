import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoModule } from './carrito/carrito.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CatalogoModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
