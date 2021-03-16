import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PaymentComponent } from './payment/payment.component';
import { AffirmationComponent } from './affirmation/affirmation.component';


const routes: Routes = [
  {
    path: '', component: WelcomeComponent
  }, 
  {
    path: 'menu', component: MenuComponent
  }, {
    path: 'shoppingcart', component: ShoppingcartComponent
  },
  {
    path: 'order', component: OrderComponent
  },
  {
    path: 'payment', component: PaymentComponent
  },
  {
    path: 'affirmation', component: AffirmationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

