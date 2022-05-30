import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from '../carrito/components/carrito/carrito.component';

const routes: Routes = [
  
  { path: 'carrito', component: CarritoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'catalogo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
