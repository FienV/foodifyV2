import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../shared/services/shoppingcart.service';

@Component({
  selector: 'app-affirmation',
  templateUrl: './affirmation.component.html',
  styleUrls: ['./affirmation.component.css']
})
export class AffirmationComponent implements OnInit {
  dishtotal:any;
  clientName:any;
  date:any;
  dishes = this.shoppingcartService.getDishes();

  constructor(private shoppingcartService: ShoppingcartService) { }

  ngOnInit(): void {
    this.dishtotal = localStorage.getItem('amount');
    this.clientName = localStorage.getItem('name');
    this.date = localStorage.getItem('date');
  }

}
