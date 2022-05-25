import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';



@NgModule({
  declarations: [
    ProductosComponent,
    DetalleProductoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductosComponent
  ]
})
export class CatalogoModule { }
