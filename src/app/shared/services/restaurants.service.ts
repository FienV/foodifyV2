import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../model/restaurants.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  url: string = 'http://syntra.terugsamen.be/theblackwindows/public/api/restaurants'

  constructor(private http: HttpClient) {}

  retrieveAllRestaurants(): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.url)
      .pipe()
  };
}
