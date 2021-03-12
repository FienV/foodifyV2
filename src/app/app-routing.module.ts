import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginClientComponent} from './login-client/login-client.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MenuComponent } from './menu/menu.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';


const routes: Routes = [
  {
    path: '', redirectTo:'welcome', pathMatch: 'full'
  },
  {
    path: 'welcome', component: WelcomeComponent
  }, {
    path: 'login-client', component: LoginClientComponent
  }, {
    path: 'login-owner', component: LoginOwnerComponent
  }, {
    path: 'restaurants', component: RestaurantsComponent
  }, {
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
