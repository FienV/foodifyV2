import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../shared/services/shoppingcart.service';
import { MenuService } from '../shared/services/menu.service';


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

dishes = this.shoppingcartService.getDishes();


  constructor(private shoppingcartService: ShoppingcartService, private menuService: MenuService) { }

  ngOnInit(): void {
  }

deleteDish(i:number) {
  this.dishes.splice(i,1);
}

}
