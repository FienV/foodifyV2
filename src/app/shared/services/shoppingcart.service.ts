import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  dishes = [];

  addToCart (product) {
    this.dishes.push(product);
  }

  getDishes () {
    return this.dishes;
  }

  clearCart () {
    this.dishes = [];
    return this.dishes;
  }

  constructor() { }
}
