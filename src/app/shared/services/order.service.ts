import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order.model';
import { Dish } from '../model/menu.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url: string;
  dishes: Dish [];

  constructor(public http: HttpClient) { 
    this.url = 'https://blooming-thicket-37635.herokuapp.com/https://syntra.terugsamen.be/theblackwindows/public/api/dishes';
  }
}
