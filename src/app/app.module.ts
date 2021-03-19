import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { AffirmationComponent } from './affirmation/affirmation.component';




@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,

    MenuComponent,

    WelcomeComponent,

    OrderComponent,

    PaymentComponent,

    AffirmationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

