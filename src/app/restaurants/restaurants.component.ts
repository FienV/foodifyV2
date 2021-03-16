import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../shared/services/restaurants.service'
import { Observable } from 'rxjs';
import { Restaurant } from '../shared/model/restaurants.model'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestaurantsComponent implements OnInit {
  resto_name: string;
  restaurants$: Observable<Restaurant[]>

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit(): void {
  }

  showAllRestaurants () {
    this.restaurantService.showAllRestaurants();
    }

  /* join clientCity & restoCity? */ 
  /* searchRestaurants() {
    this.restaurants$ = this.restaurantService.searchRestaurants(this.resto_name);
  }  */

}
