import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { Shoppingcart } from '../models/shoppingcart'; 

import { Dish } from '../model/menu.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
shoppingcartUrl:string = 'https://syntra.terugsamen.be/theblackwindows/public/api/shoppingcart';

  url:string;
  constructor( private http: HttpClient) {  }
/*
  getShoppingCart() : Observable <Shoppingcart[]> {
    return this.http.get<Shoppingcart[]>(this.shoppingcartUrl);
  }*/
}
 