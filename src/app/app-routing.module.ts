import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';


const routes: Routes = [
   {
    path: 'menu', component: MenuComponent
  }, {
    path: 'shoppingcart', component: ShoppingcartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
