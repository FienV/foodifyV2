import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../model/menu.model';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url: string;
  dishes: Dish [];

  
  constructor(public http: HttpClient) {
    this.url = 'http://syntra.terugsamen.be/theblackwindows/public/api/dishes';
  }
  
  getDishes() {
    return this.http.get(this.url);
  }
  //Observable<any> {
    //return this.http.get<any>(this.url)
    //.pipe()
      //}
  }
