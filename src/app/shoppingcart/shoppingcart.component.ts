import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../shared/services/shoppingcart.service';
import { MenuService } from '../shared/services/menu.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  
  amount: any = 1;
  
  dishes = this.shoppingcartService.getDishes();
  

  constructor(private shoppingcartService: ShoppingcartService, private menuService: MenuService, private route: Router) { }

  ngOnInit(): void {

  }
 
  deleteDish(i: number) {
    this.dishes.splice(i, 1);
  }

  goToOrder() {
    localStorage.setItem('amount', this.amount);
    this.route.navigateByUrl("/order");
  }

 

}
