import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../model/restaurants.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  url: string; 
  constructor(private http: HttpClient) {
    this.url = 'http://syntra.terugsamen.be/theblackwindows/public/api/restaurants';
  }

  showAllRestaurants(): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.url)
      .pipe()
  }

  searchRestaurants(keyword):Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.url +`s=${keyword}`)
    .pipe(map(res => res['Search']))

  }

}
