import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../shared/services/shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
dish = this.shoppingcartService.getDishes();

  constructor(private shoppingcartService: ShoppingcartService) { }

  ngOnInit(): void {
  }

}
