import { Component, OnInit } from '@angular/core';
import {ShoppingcartService} from '../shared/services/shoppingcart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  dishtotal:any;

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

}
