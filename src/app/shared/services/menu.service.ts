import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../model/menu.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url: string = 'http://syntra.terugsamen.be/theblackwindows/public/api/dishes'
  
  constructor(private http: HttpClient) {}
  
  retrieveAllDishes(): Observable<Dish> {
    return this.http.get<Dish>(this.url)
      .pipe()
  };
}
