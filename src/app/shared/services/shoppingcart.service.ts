import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../model/menu.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
 dishes = [];
  constructor(private http: HttpClient)  {}

  addToShoppingcart(dishes) {
    this.dishes.push(dishes);
    
  }

  getDishes () {
    return this.dishes;
  }

  getDish(id: number): Dish {
    return this.dishes.find(d => d.id === id);
  }

  clearShoppingcart () {
    this.dishes = [];
    return this.dishes;
  }

 
}
