import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../model/menu.model';
import { tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url: string;
  dishes: Dish [];

  
  constructor(public http: HttpClient) {
    this.url = 'https://blooming-thicket-37635.herokuapp.com/https://syntra.terugsamen.be/theblackwindows/public/api/dishes';
  }
  
  getDishes() {
    return this.http.get(this.url).pipe(
      tap (result => console.log('Via onze eigen API:', result))
    );
  }
}
