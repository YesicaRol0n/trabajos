import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/components/carrito/carrito.component';
import { ProductosComponent } from './catalogo/productos/productos.component';

const routes: Routes = [
  { path: '', component: ProductosComponent},
  { path: 'catalogo', component: ProductosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'catalogo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
