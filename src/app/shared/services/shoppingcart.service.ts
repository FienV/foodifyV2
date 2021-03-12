import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Dish } from '../model/menu.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  url:string  = 'https://syntra.terugsamen.be/theblackwindows/public/api/shoppingcart';
  constructor( private http: HttpClient) { }

  
}
