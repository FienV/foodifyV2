import { Component, OnInit } from '@angular/core';
/*import {Restaurant} from '../shared/services/restaurant.service';*/
import {Observable} from 'rxjs';
import {Dish} from '../shared/model/menu.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { Shoppingcart } from '../shared/model/shoppingcart.model';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  Shoppingcart: Array <Shoppingcart> = [];

  
  public shoppingcart: Observable<Shoppingcart[]>;

  constructor(/* private shoppingcartService: ShoppingcartService*/) { }

  ngOnInit(): void {
  }

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