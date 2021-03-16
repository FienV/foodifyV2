import { Component, OnInit } from '@angular/core';
import { Shoppingcart } from '../shared/model/shoppingcart.model';




/*import {Restaurant} from '../shared/services/restaurant.service';*/
import { from, Observable } from 'rxjs';
import { Dish } from '../shared/model/menu.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ShoppingcartService } from '../shared/services/shoppingcart.service';



@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  restonaam = "De gouverneur"
  dish = "pasta vongole"
  price = 18
  amount = 1
  subtotal = 18
  deliverycost = 4  
  total = 22
  addAmount: Observable<number>
  shoppingcart: Shoppingcart[];



  constructor(private shoppingcartService: ShoppingcartService) { }

  ngOnInit() {
    //    this.shoppingcartService.getShoppingCart().subscribe();
  }

  onDelete(Dish) {
    console.log('delete');
  }

  reduce(amount) {
    console.log('reduce');
  }

  add(amount) {
    console.log('add');
  }

  

  /*
    

 // Sub totaalprijs 
 
getSubotal(){
    let total = 0;
    for (var i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].amount) {
            total += this.cartItems[i].amount * this.cartItems[i].quantity;
            this.totalamount = total;
        }
    }
    return subtotal;
}
  }

// bezorgkosten 
DeliveryCost () {
  this.total < 20;
  ? this.deliverycost = "4";
  : this.deliverycost = "0";

// total () {
  return this.total
  'subtotal'+ 'deliverycost'
}

  */



}

/*

import { Component, OnInit } from '@angular/core';
{Restaurant} from '../shared/services/restaurant.service';
import {Observable} from 'rxjs';
import {Dish} from '../shared/model/menu.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Shoppingcart } from '../shared/model/shoppingcart.model';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  dishName$: Observable<string>;
  dishPrice$: Observable<number>;
  amount: number;
  remark$: Observable<string>;



  constructor( public shoppingcartService: ShoppingCartService{ }

  ngOnInit(): void {
  }

}

*/