import { Component, OnInit } from '@angular/core';
import {ShoppingcartService} from '../shared/services/shoppingcart.service';



import { Observable } from 'rxjs';
import { Dish } from '../shared/model/menu.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';




@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  dishes = this.shoppingcartService.getDishes();

  constructor(private shoppingcartService: ShoppingcartService) { }

  ngOnInit(): void {
    
  }

}
