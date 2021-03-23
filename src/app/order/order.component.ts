import { Component, OnInit } from '@angular/core';
import {ShoppingcartService} from '../shared/services/shoppingcart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  dishes = this.shoppingcartService.getDishes();

  dishtotal:any;
  name:any;
  date:any;

  form = new FormGroup({

    name: new FormControl('', [Validators.required]),

    address: new FormControl('', [Validators.required]),
    
    phone: new FormControl('', [Validators.required]),

    email: new FormControl('', [Validators.required, Validators.email]),

    date: new FormControl('', Validators.required)

  });


  constructor(private shoppingcartService: ShoppingcartService) { }

  ngOnInit(): void {
    this.dishtotal = localStorage.getItem('amount')
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }
  
  storelocal() {
    localStorage.setItem('name', this.name);
    localStorage.setItem('date', this.date);
  }
}
